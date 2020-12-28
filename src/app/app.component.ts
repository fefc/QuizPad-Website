import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public selectedLanguage: string = 'fr';

  constructor(
    private platform: Platform,
    private menuCtrl: MenuController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
  ) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.translate.addLangs(['en', 'fr', 'de']); //Set available languages

      this.selectedLanguage = this.getPreferredLanguage() || this.getSimplePlatformLocale();

      if (this.translate.getLangs().indexOf(this.selectedLanguage) === -1) {
        this.selectedLanguage = 'en';
      }

      this.translate.setDefaultLang(this.selectedLanguage);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changeLanguage() {
    this.translate.setDefaultLang(this.selectedLanguage);
    this.savePreferredLanguage(this.selectedLanguage);
  }

  openMenu() {
    this.menuCtrl.open('first');
  }

  closeMenu() {
    this.menuCtrl.close('first');
  }

  ngOnInit() {
    this.selectedIndex = 0;

    /*const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = 0;//this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }*/
  }

  getSimplePlatformLocale() {
    let locale: string = this.getCrossPlatformLocale().toLowerCase();

    if (locale.includes('-')) locale = locale.split('-')[0];

    return locale;
  }

  //Code taken from
  //https://github.com/apache/cordova-plugin-globalization/blob/master/src/browser/GlobalizationProxy.js
  getCrossPlatformLocale () {
    // userLanguage is for IE, which corresponds to selected regional format
    return (<any> window.navigator).userLanguage || window.navigator.language;
  }

  getPreferredLanguage():string {
      if (localStorage){
          return localStorage['user-language'] || "";
      }
      else{
          return "";
      }
  }

  savePreferredLanguage(language: string) {
    if (localStorage){
      localStorage['user-language'] = language;
    }
  }
}
