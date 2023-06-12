import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps';
import { CommonWebComponentsModule } from '@poc-angular-webcomponent/common-web-components';
import { AppGmapComponent } from './app-gmap/app-gmap.component';

@NgModule({
  imports: [CommonModule, GoogleMapsModule, CommonWebComponentsModule],
  declarations: [AppGmapComponent],
  exports: [AppGmapComponent],
})
export class GmapWebComponentsModule {}
