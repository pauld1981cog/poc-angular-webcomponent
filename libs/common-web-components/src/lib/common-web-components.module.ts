import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUserDetailsComponent } from './common-user-details/common-user-details.component';
import { CommonFlightDetailsComponent } from './common-flight-details/common-flight-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CommonUserDetailsComponent, CommonFlightDetailsComponent],
  exports: [CommonUserDetailsComponent, CommonFlightDetailsComponent],
})
export class CommonWebComponentsModule {}
