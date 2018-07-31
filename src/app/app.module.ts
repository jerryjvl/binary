import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule, MatListModule, MatDividerModule, MatSelectModule, MatOptionModule, MatBadgeModule, MatChipsModule, MatTableModule, MatSortModule, MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RiskListComponent } from './risk-list/risk-list.component';
import { RiskViewComponent } from './risk-view/risk-view.component';
import { RiskDeleteDialogComponent } from './risk-delete-dialog/risk-delete-dialog.component';
import { RiskAddDialogComponent } from './risk-add-dialog/risk-add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RiskListComponent,
    RiskViewComponent,
    RiskDeleteDialogComponent,
    RiskAddDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule, MatListModule, MatDividerModule, MatSelectModule, MatOptionModule, MatBadgeModule, MatChipsModule, MatTableModule, MatSortModule, MatDialogModule,

    BrowserAnimationsModule,
    AppRoutingModule
  ],
  entryComponents: [
    RiskDeleteDialogComponent,
    RiskAddDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
