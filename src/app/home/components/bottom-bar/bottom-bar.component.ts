import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
  options = ['Consulting', 'Assessments & Evaluations', 'Reporting', 'Training & Capacity Building', 'Proposal Writing & Fundraising'];
  selectedOption: string = '';
}
