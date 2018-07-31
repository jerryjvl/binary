import { Component } from '@angular/core';
import { AssessmentsService } from './data-model/assessments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public assessments: AssessmentsService) { }
}
