import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-risk-add-dialog',
  templateUrl: './risk-add-dialog.component.html',
  styleUrls: ['./risk-add-dialog.component.css']
})
export class RiskAddDialogComponent implements OnInit {
  public asset: string;
  public threat: string;

  constructor(private dialogRef: MatDialogRef<RiskAddDialogComponent>) { }

  ngOnInit() {
    this.asset = "";
    this.threat = "";
  }

  ok() {
    this.dialogRef.close({ asset: this.asset, threat: this.threat });
  }
}
