import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { Scan } from '../pages/Scan/scan';
import { Menu } from '../pages/Menu/menu';
import { TabsPage } from '../pages/Tabs/tab';
import { Camera } from '@ionic-native/camera';
import { HistoryMenu } from '../pages/Menu/History/history';
import { BackandService } from '../pages/Service/backandService';
import { TemplateInfo } from '../pages/Infomation/MoreInfo/templateInfo'
//Information
import { SimpleInfo } from '../pages/Infomation/SimpleInfo/simpleInfo';
import { MoreInfo } from '../pages/Infomation/MoreInfo/moreInfo';

@NgModule({
  declarations: [
    MyApp,
    Menu,
    Scan,
    TabsPage,
    SimpleInfo,
    HistoryMenu,
    MoreInfo,
    TemplateInfo,

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
    HistoryMenu,
    MoreInfo,
    TemplateInfo,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BackandService,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
