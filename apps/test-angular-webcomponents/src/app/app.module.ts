import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonWebComponentsModule } from '@poc-angular-webcomponent/common-web-components';
import { GmapWebComponentsModule } from '@poc-angular-webcomponent/gmap-web-components';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    GoogleMapsModule,
    CommonWebComponentsModule,
    GmapWebComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
