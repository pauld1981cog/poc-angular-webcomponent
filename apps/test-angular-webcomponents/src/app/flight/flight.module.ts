import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { CommonWebComponentsModule } from '@poc-angular-webcomponent/common-web-components';

@NgModule({
  declarations: [FlightDetailsComponent],
  imports: [CommonModule, FlightRoutingModule, CommonWebComponentsModule],
  exports: [FlightDetailsComponent],
})
export class FlightModule {}
