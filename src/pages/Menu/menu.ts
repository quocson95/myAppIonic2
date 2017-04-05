import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})


export class Menu {

  constructor(public navCtrl: NavController) {
  }
  menuItems=[
    {name:"Lịch sử truy xuât",value:"1"},
    {name:"Đường đi của sản phẩm",value:"2"},
    {name:"Trang trại được đánh giá cao",value:"3"},
    {name:"Tin tức và Cảnh báo",value:"4"},
    {name:"Nơi mua thịt sạch",value:"5"},
    {name:"tem truy xuất là gì",value:"6"},
    {name:"Hướng dẫn sử dụng",value:"7"},
  ];

   itemSelected(item:any) {
    console.log("Selected Item", item.name,"--",item.value);
  }
}