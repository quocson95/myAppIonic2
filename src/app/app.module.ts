import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { Scan } from '../pages/Scan/scan';
import { Menu } from '../pages/Menu/menu';
import { TabsPage } from '../pages/Tabs/tab';
import { Camera } from '@ionic-native/camera';
import { SimpleInfo } from '../pages/Infomation/simpleInfo';

@NgModule({
  declarations: [
    MyApp,
    Menu,
    Scan,
    TabsPage,
    SimpleInfo,

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Menu,
    Scan,
    TabsPage,
    SimpleInfo,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
