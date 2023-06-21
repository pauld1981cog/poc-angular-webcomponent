import { Component } from '@angular/core';
import { CommonFlightDetailsModel } from 'libs/common-web-components/src/lib/common-flight-details/models/common-flight-details-model';
import { CommonUserDetailsModel } from 'libs/common-web-components/src/lib/common-user-details/models/common-user-details-model';

@Component({
  selector: 'poc-angular-webcomponent-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userDtlModel: CommonUserDetailsModel;
  flightDtlModel: CommonFlightDetailsModel = new CommonFlightDetailsModel();

  constructor() {
    this.init();

    this.userDtlModel = {
      id: 'User10001',
      fName: 'Dipankar',
      mName: '',
      lName: 'Paul',
      age: 41,
      type: 'Passenger',
    }
  }

  init() {
    this.flightDtlModel = new CommonFlightDetailsModel();
    this.flightDtlModel.id = 'FlightID10001';
    this.flightDtlModel.fNo = 'FlithtNo20001';
    this.flightDtlModel.name = 'Flight Name 30001'
    this.flightDtlModel.desc = 'Description of FlithtNo20001';
    this.flightDtlModel.type = 'Passenger Flight';
  }
}
