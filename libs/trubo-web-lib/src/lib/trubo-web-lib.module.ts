import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurboDatePipe } from './date/pipes/turbo-date.pipe';
import { TurboCurrencyPipe } from './currency/pipes/turbo-currency.pipe';
import { TurboAddressComponent } from './address/components/turbo-address/turbo-address.component';
import { TurboPhoneComponent } from './phone/components/turbo-phone/turbo-phone.component';
import { TurboPhonePipe } from './phone/pipes/turbo-phone.pipe';
import { TurboPdfViewerComponent } from './pdf/components/turbo-pdf-viewer/turbo-pdf-viewer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TurboDatePipe,
    TurboCurrencyPipe,
    TurboAddressComponent,
    TurboPhoneComponent,
    TurboPhonePipe,
    TurboPdfViewerComponent,
  ],
  exports: [
    TurboDatePipe,
    TurboCurrencyPipe,
    TurboAddressComponent,
    TurboPhoneComponent,
    TurboPhonePipe,
    TurboPdfViewerComponent,
  ],
})
export class TruboWebLibModule {}
