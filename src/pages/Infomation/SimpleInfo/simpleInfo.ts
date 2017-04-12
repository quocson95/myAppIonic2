import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoreInfo } from '../MoreInfo/moreInfo';

@Component({
  selector: 'page-simpleinfo',
  templateUrl: 'simpleInfo.html'
})
export class SimpleInfo {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  items =  [
    {name:"Tên sản phẩm",value:"Thịt heo siêu nạc"},
    {name: "Khối lượng",value:"10kg"},
    {name:"Ngày nhập kho",value:"30/2/2017"},
    {name:"Ngày hết hạn",value:"30/2/2018"},
    {name:"Mã hàng hóa",value:"xxxxx"},
    {name:"Nơi bán",value:"Siêu thị coop"},
    {name:"Nơi cung cấp",value:"KTX Bách Khoa"}
  ];

  public moreInfo(){
    this.navCtrl.push(MoreInfo);
  }
}