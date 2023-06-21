import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CommonWebComponentsModule } from '@poc-angular-webcomponent/common-web-components';

@NgModule({
  declarations: [CustomerDetailsComponent],
  imports: [CommonModule, CustomerRoutingModule, CommonWebComponentsModule],
  exports: [CustomerDetailsComponent],
})
export class CustomerModule { }
