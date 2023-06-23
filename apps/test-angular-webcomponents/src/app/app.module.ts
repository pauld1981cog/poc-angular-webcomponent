import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonWebComponentsModule } from '@poc-angular-webcomponent/common-web-components';
import { GmapWebComponentsModule } from '@poc-angular-webcomponent/gmap-web-components';
import { HomeComponent } from './home/home.component';
import { TruboWebLibModule } from '@poc-angular-webcomponent/trubo-web-lib';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    GoogleMapsModule,
    CommonWebComponentsModule,
    GmapWebComponentsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    TruboWebLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    'http://127.0.0.1:8080/turvo/assets/i18n/',
    '.json'
  );
}
