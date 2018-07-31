import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-risk-delete-dialog',
  templateUrl: './risk-delete-dialog.component.html',
  styleUrls: ['./risk-delete-dialog.component.css']
})
export class RiskDeleteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
