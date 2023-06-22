import { Component } from '@angular/core';
import { CommonFlightDetailsModel } from 'libs/common-web-components/src/lib/common-flight-details/models/common-flight-details-model';
import { FlightDetailsService } from './flight-details.service';

@Component({
  selector: 'poc-angular-webcomponent-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent {
  flightDtlModel: CommonFlightDetailsModel = new CommonFlightDetailsModel();
  flightColors = [
    {key: 'code001', value: 'Red'},
    {key: 'code002', value: 'Green'},
    {key: 'code003', value: 'Yellow'},
  ];

  constructor(private flightService: FlightDetailsService) {
    //this.init();
    this.fetchFlightDetails();
  }

  init() {
    this.flightDtlModel = new CommonFlightDetailsModel();
    this.flightDtlModel.id = 'FlightID10001';
    this.flightDtlModel.fNo = 'FlithtNo20001';
    this.flightDtlModel.name = 'Flight Name 30001'
    this.flightDtlModel.desc = 'Description of FlithtNo20001';
    this.flightDtlModel.type = 'Passenger Flight';
  }

  fetchFlightDetails() {
    this.flightService.getFlightDetails()
      .subscribe(response => {
        this.flightDtlModel = response;
      })
  }
}
