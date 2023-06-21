import { Component } from '@angular/core';
import { CommonUserDetailsModel } from 'libs/common-web-components/src/lib/common-user-details/models/common-user-details-model';

@Component({
  selector: 'poc-angular-webcomponent-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent {
  userDtlModel: CommonUserDetailsModel;

  constructor() {

    this.userDtlModel = {
      id: 'User10001',
      fName: 'Dipankar',
      mName: '',
      lName: 'Paul',
      age: 41,
      type: 'Passenger',
    }
  }


}
