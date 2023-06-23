import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { CommonWebComponentsModule } from '@poc-angular-webcomponent/common-web-components';
import { FlightDetailsService } from './flight-details/flight-details.service';
import { TruboWebLibModule } from '@poc-angular-webcomponent/trubo-web-lib';

@NgModule({
  declarations: [FlightDetailsComponent],
  imports: [CommonModule, TranslateModule, FlightRoutingModule, 
    CommonWebComponentsModule, 
    TruboWebLibModule
  ],
  exports: [FlightDetailsComponent],
  providers: [FlightDetailsService]
})
export class FlightModule { }
