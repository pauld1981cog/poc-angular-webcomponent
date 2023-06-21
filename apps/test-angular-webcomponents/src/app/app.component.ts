import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonFlightDetailsModel } from 'libs/common-web-components/src/lib/common-flight-details/models/common-flight-details-model';
import { CommonUserDetailsModel } from 'libs/common-web-components/src/lib/common-user-details/models/common-user-details-model';

@Component({
  selector: 'poc-angular-webcomponent-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-angular-webcomponents';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'en-US', 'en-IN', 'nl', 'nl-BE']);
    translate.setDefaultLang(this.getUsersLocale());
    this.init();    
  }

  init() {}

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  getUsersLocale(): string {
    const defaultValue: string = 'en';
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    console.log('getUsersLocale()=>', lang);
    return lang;
  }
}
