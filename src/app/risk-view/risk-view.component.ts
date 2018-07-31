import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FORMS } from '../data-model/forms.data';
import { Form } from '../data-model/form';
import { Assessment } from '../data-model/assessment';
import { AssessmentsService } from '../data-model/assessments.service';

@Component({
  selector: 'app-risk-view',
  templateUrl: './risk-view.component.html',
  styleUrls: ['./risk-view.component.css']
})
export class RiskViewComponent implements OnInit {
  public assessment: Assessment;

  constructor(private route: ActivatedRoute, public assessments: AssessmentsService) { }

  ngOnInit() {
    this.assessment = this.assessments.createOrUpdateFromString(
      this.route.snapshot.paramMap.get('asset'),
      this.route.snapshot.paramMap.get('threat'),
      this.route.snapshot.paramMap.get('type'),
      this.route.snapshot.paramMap.get('answers')
    );
  }

  public getAllForms(): Form[] {
    return FORMS;
  }

  public updateRiskType(riskType: string): void {
    this.assessments.updateRiskType(this.assessment, riskType);
  }
}
