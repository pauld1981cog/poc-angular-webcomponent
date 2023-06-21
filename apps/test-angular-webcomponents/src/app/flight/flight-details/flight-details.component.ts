import { Component } from '@angular/core';
import { CommonFlightDetailsModel } from 'libs/common-web-components/src/lib/common-flight-details/models/common-flight-details-model';

@Component({
  selector: 'poc-angular-webcomponent-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent {
  flightDtlModel: CommonFlightDetailsModel = new CommonFlightDetailsModel();

  constructor() {
    this.init();
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
