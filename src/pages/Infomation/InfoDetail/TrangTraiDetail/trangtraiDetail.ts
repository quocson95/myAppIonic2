import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Maps } from '../../../Maps/maps';

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
  tiemchungBases=[{
    day:"Ngày",
    type:"Loại Thuốc",
    status:" Tình trạng vật nuôi"
  },{
    day:"11/2/1234",
    type: "Vitamin B",
    status:"Siêu vi B"
  },{
     day:"2/4/2012",
    type: "Vitamin C",
    status:"Thiếu Fe"
  }]

  bonphanBases=[{
    day:"Ngày",
    type:"Loại Thuốc",
    status:" Tình trạng cây trồng"
  },{
    day:"11/2/1234",
    type: "Đạm",
    status:"Vàng lá"
  },{
    day:"2/4/2012",
    type: "Lân",
    status:"Chết nhanh"
  }]
  detailcompanyBases=[{
    name:"Tên",
    value:"Apple"
  },{
    name:"Địa chỉ",
    value:"496 Hòa Hảo"
  }]

  //menthod
  public seeOnMaps(){
    console.log("Click See on Maps");
    this.navCtrl.push(Maps);
    
  }
}