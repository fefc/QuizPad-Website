import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  private selectedLanguage: string = 'fr';

  public appPages = [
    {
      title: 'Download',
      url: '/download',
      icon: 'download'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
  ) {
    this.selectedLanguage = 'de';

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.translate.setDefaultLang(this.selectedLanguage);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changeLanguage() {
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  ngOnInit() {
    this.selectedIndex = 0;

    /*const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = 0;//this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }*/
  }
}
