import { Component, Input } from '@angular/core';
import { CommonUserDetailsModel } from './models/common-user-details-model';

@Component({
  selector: 'common-user-details',
  templateUrl: './common-user-details.component.html',
  styleUrls: ['./common-user-details.component.scss'],
})
export class CommonUserDetailsComponent {
  @Input() user: CommonUserDetailsModel;

  constructor() {
    this.user = {
      id: '',
      fName: '',
      mName: '',
      lName: '',
      age: 0,
      type: '',
    };
  }
}
