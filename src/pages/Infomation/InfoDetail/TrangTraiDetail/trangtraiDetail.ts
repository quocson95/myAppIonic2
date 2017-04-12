import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TemplateInfo } from '../../MoreInfo/templateInfo'

@Component({
  selector: 'page-trangtraidetail',
  templateUrl: 'trangtraiDetail.html'
})

export class TrangTraiDetail {
  
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  infoDetail=[{
      name:"Tên Trang Trại",
      value:"Google Inc"
    },{
      name:"Giống",
      value:"XXX"
    },{
      name:"Ngày bán",
      value:""
    },{
      name:"Xuất Chuồng",
      value:"12/2/2039"
    },{
      name:"Thu Hoạch",
      value:""
    }
  ]
}