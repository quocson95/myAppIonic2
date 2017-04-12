import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Maps } from '../../../Maps/maps';
import {InAppBrowser} from 'ionic-native';

@Component({
  selector: 'page-cosodetail',
  templateUrl: 'cosoDetail.html'
})



export class CoSoDetail {
  cordova:any;
  constructor(public navCtrl: NavController,private platform:Platform) {
    this.navCtrl = navCtrl;
    this.platform = platform;
  }

  infoDetail=[{
    name:"Tên Trang Trại",
    value:"Google Inc"
  },{
    name:"Địa Chỉ",
    value:"497 Hòa Hảo P7 Q10 HCM"      
  },{
    name:"Số Điện Thoại",
    value:"0909 123456"
  },{
    name:"Số Fax",
    value:"123324654"
  },{
    name:"Website",
    value:"https://google.com.vn"
  }]

  //method
  public openURL(url:string){
       this.platform.ready().then(() => {
        open('https:google.com', "_self", "location=no");
    });
  }
}