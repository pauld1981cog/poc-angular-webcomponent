import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CommonWebComponentsModule } from '@poc-angular-webcomponent/common-web-components';
import { TruboWebLibModule } from '@poc-angular-webcomponent/trubo-web-lib';


@NgModule({
  declarations: [CustomerDetailsComponent],
  imports: [CommonModule, CustomerRoutingModule, CommonWebComponentsModule, TruboWebLibModule],
  exports: [CustomerDetailsComponent],
})
export class CustomerModule { }
