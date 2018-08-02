import { Component, OnInit, ViewChild } from '@angular/core';
import { AssessmentsService } from '../data-model/assessments.service';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Assessment } from '../data-model/assessment';
import { RiskDeleteDialogComponent } from '../risk-delete-dialog/risk-delete-dialog.component';
import { RiskAddDialogComponent } from '../risk-add-dialog/risk-add-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risk-list',
  templateUrl: './risk-list.component.html',
  styleUrls: ['./risk-list.component.css']
})
export class RiskListComponent implements OnInit {
  public displayedColumns: string[] = ['asset', 'threat', 'riskType', 'likelihood', 'impact', 'risk', 'buttons'];
  public dataSource: MatTableDataSource<Assessment>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private assessments: AssessmentsService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(assessments.assessments);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (assessment, header) => {
      switch (header) {
        case 'riskType':
          return assessment.form.riskType;
        case 'likelihood':
        case 'impact':
        case 'risk':
          var column = assessment[header];
          return column == "Low" ? 0 : (column == "High" ? 2 : 1);
        default:
          return assessment[header];
      }
    }
    this.dataSource.filterPredicate = (assessment, filter) => {
      return assessment.asset.toLowerCase().includes(filter) ||
        assessment.threat.toLowerCase().includes(filter) ||
        assessment.form.riskType.toLowerCase().includes(filter) ||
        assessment.likelihood.toLowerCase().includes(filter) ||
        assessment.impact.toLowerCase().includes(filter) ||
        assessment.risk.toLowerCase().includes(filter);
    }
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public delete(item: Assessment): void {
    this.dialog
      .open(RiskDeleteDialogComponent, { data: item })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.assessments.delete(item);
          this.dataSource = new MatTableDataSource(this.assessments.assessments);
        }
      });
  }

  public add(): void {
    this.dialog
      .open(RiskAddDialogComponent, {})
      .afterClosed()
      .subscribe(result => {
        if (result) {
          var newAssessment = this.assessments.createOrUpdateFromString(result.asset, result.threat, undefined, 'ffffffffff');
          this.dataSource = new MatTableDataSource(this.assessments.assessments);

          // Navigate to the newly created risk
          this.router.navigateByUrl(this.assessments.getPath(newAssessment));
        }
      });
  }

  public download(): void {
    this.assessments.initiateDownload();
  }

  protected navigate(item: Assessment): void {
    this.router.navigateByUrl(this.assessments.getPath(item));
  }
}
