import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/Tabs/tab';

import {BackandService} from '../pages/Service/backandService';

@Component({
  selector:'my-app',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private backandService:BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      backandService.setAppName('myappsql');
      backandService.setIsMobile(platform.is('mobile'));
      backandService.setAnonymousToken('03a941b1-49a6-4f30-bc7b-b621b081895c');
    });
  }
}
