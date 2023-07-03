import { Component } from '@angular/core';
import { CommonUserDetailsModel } from 'libs/common-web-components/src/lib/common-user-details/models/common-user-details-model';
import { TurboCurrencyModel } from 'libs/trubo-web-lib/src/lib/currency/turbo-currency-model';

@Component({
  selector: 'poc-angular-webcomponent-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent {
  userDtlModel: CommonUserDetailsModel;
  phone: string = '9876543210';
  salary: number = 57897498.4576;
  tuCurrModel: TurboCurrencyModel;

  constructor() {

    this.userDtlModel = {
      id: 'User10001',
      fName: 'Dipankar',
      mName: '',
      lName: 'Paul',
      age: 41,
      type: 'Passenger',
    }

    this.tuCurrModel = {
      decimalSeparator: '.',
      groupSeparator: ',',
      groupSize: [2, 3],
      identifier: 'symbol',
      identifierPadding: false,
      identifierPosition: 'after',
      maximumFraction: 2,
      minimumFraction: 2,
      currencyCode: 'GBP',
      currencySymbol: '£',
      countryCode: 'GB',
      countryName: 'United Kingdom',
      locale: 'en-US'
    }
  }
}
