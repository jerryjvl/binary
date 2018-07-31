import { Injectable } from '@angular/core';
import { Assessment } from './assessment';
import { FORMS } from "./forms.data";

// Proxy structure for serialization to local storage.
class StoredAssessment {
  constructor (
    public asset: string,
    public threat: string,
    public riskType: string,
    public answers: string) {}
}

// Service responsible for managing local storage, CSV download and browser URL history.
@Injectable({
  providedIn: 'root'
})
export class AssessmentsService {
  public count: number = 0;
  public assessments: Assessment[];

  //
  // Management of local storage
  //

  public constructor() {
    this.assessments = [];

    // Check local storage for serialized assessments
    var storedAssessments = localStorage.getItem('assessments');
    if (storedAssessments) {
      var proxies = JSON.parse(storedAssessments) as StoredAssessment[];
      if (proxies) {
        this.assessments = proxies.map(p => this.proxyToAssessment(p));
      }
    }

    this.count = this.assessments.length;
  }

  private persist(): void {
    localStorage.setItem(
      'assessments',
      JSON.stringify(this.assessments.map(a => this.assessmentToProxy(a)))
    );
  }

  private assessmentToProxy(assessment: Assessment): StoredAssessment {
    return new StoredAssessment(
      assessment.asset,
      assessment.threat,
      assessment.form.riskType,
      assessment.answers.map(a => a ? 't' : 'f').join('')
    );
  }

  private proxyToAssessment(proxy: StoredAssessment): Assessment {
    return new Assessment(
      proxy.asset,
      proxy.threat,
      FORMS.find(form => form.riskType == proxy.riskType) || FORMS[0],
      proxy.answers.toLowerCase().split('').map(a => a == 't' ? true : false));
  }

  //
  // Management of list of assessments
  //

  public createOrUpdateFromString(asset: string, threat: string, riskType: string, answers: string): Assessment {
    return this.createOrUpdate(this.proxyToAssessment(new StoredAssessment(
      asset,
      threat,
      riskType,
      answers
    )));
  }

  public createOrUpdate(assessment: Assessment): Assessment {
    // Create-or-update and return canonical entry from the store
    var entry = this.assessments
      .find(stored => stored.asset == assessment.asset && stored.threat == assessment.threat);
    
    if (entry) {
      // Update pre-existing entry
      entry.form = assessment.form;
      entry.answers = assessment.answers;
      entry.calculateFactors();
    } else {
      // Add new entry
      this.assessments = this.assessments.concat([assessment]);
      this.count = this.assessments.length;
      entry = assessment;
    }

    // Store to local storage and return canonical entry
    this.persist();
    return entry;
  }

  public delete(assessment: Assessment): void {
    var ix = this.assessments.findIndex(stored => stored == assessment);
    if (ix != -1) {
      // Delete found entry
      this.assessments.splice(ix, 1);
      this.count = this.assessments.length;
      this.persist();
    }
  }

  public updateRiskType(assessment: Assessment, riskType: string): void {
    assessment.form = FORMS.find(form => form.riskType == riskType) || FORMS[0];
    this.updatePath(assessment);
  }

  public updateAnswer(assessment: Assessment, ix: number, answer: boolean): void {
    assessment.answers[ix] = answer;
    assessment.calculateFactors();
    this.updatePath(assessment);
  }

  //
  // Management of URL history
  //

  public getPath(assessment: Assessment): string {
    var path = `/risk/${assessment.asset}/${assessment.threat}`;
    if (assessment.form.riskType) {
      path = path + `/${assessment.form.riskType}/`;
    } else {
      path = path + '/undefined/';
    }
    path = path + assessment.answers.map(a => a ? 't' : 'f').join('');

    return path;
  }

  public updatePath(assessment: Assessment): void {
    window.history.pushState(null, 'Binary Risk Assessment', this.getPath(assessment));
    this.persist();
  }

  //
  // Management of CSV downloads
  //

  public initiateDownload(): void {
    // Column headers
    var header = ['Asset', 'Threat', 'Risk Type', 'Likelihood', 'Impact', 'Risk',
      'Q0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9'];

    // Map assessments to arrays of strings
    var lines = this.assessments.map(
      assessment => [
        this.valueToCsvSafe(assessment.asset),
        this.valueToCsvSafe(assessment.threat),
        assessment.form.riskType,
        assessment.likelihood,
        assessment.impact,
        assessment.risk
      ].concat(assessment.answers.map(answer => this.answerToCsv(answer)))
    );

    // Map headers + lines to a single string blob
    var csv = [header].concat(lines)
      .map(line => line.join(','))
      .join('\n');
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })

    // Generate download action
    var filename = 'risks.csv';
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      var link = document.createElement('a');
      if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';

        // Hack to initiate download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  private valueToCsvSafe(value: string): string {
    // Double up "s and quote-enclose if there are "s, commas, or newlines
    var result = value.replace(/"/g, '""');
    if (result.search(/("|,|\n)/g) >= 0)
      result = '"' + result + '"';

    return result;
  }

  private answerToCsv(answer: boolean): string {
    return answer ? "T" : "F";
  }
}