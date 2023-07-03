import { Component } from '@angular/core';

import translate from 'google-translate-open-api';
import { TranslateService } from '@ngx-translate/core';

import { CommonFlightDetailsModel } from 'libs/common-web-components/src/lib/common-flight-details/models/common-flight-details-model';
import { FlightDetailsService, Role } from './flight-details.service';

@Component({
  selector: 'poc-angular-webcomponent-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent {
  flightDtlModel: CommonFlightDetailsModel = new CommonFlightDetailsModel();
  flightColors = [
    { key: 'code001', value: 'Red' },
    { key: 'code002', value: 'Green' },
    { key: 'code003', value: 'Yellow' },
  ];
  departureDate: string = '2022-06-10T12:30:00Z';
  arrivalDate: string = '2022-06-20T22:50:00Z';
  roles: Role[] = [];

  constructor(private flightService: FlightDetailsService, public translateS: TranslateService) {
    //this.init();
    this.fetchFlightDetails();
    this.fetchRoles();
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

  fetchRoles() {
    this.flightService.fetchRoles()
      .subscribe(response => {
        this.roles = response.data;
        this.translateRoles();
      })
  }

  translateRoles() {
    // let values: string[] = [];
    // this.roles.forEach(async(role) => {
    //   const result = await translate(role.value, {
    //     tld: "cn",
    //     to: this.translateS.currentLang,
    //   });
    //   role.value = result.data[0];   
    // });
    console.log(this.translateS.store.currentLang)
    this.roles.forEach(role => {
      this.flightService.googleTranslateAPI(this.translateS.store.currentLang, role.value).subscribe((response: any) => {
        role.value = response.data.translations[0].translatedText
      })
    });
  }
}
