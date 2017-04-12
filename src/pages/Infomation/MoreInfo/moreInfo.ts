import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TemplateInfo } from 'templateInfo';

import { TrangTraiDetail } from '../InfoDetail/TrangTraiDetail/trangtraiDetail';
import { CoSoDetail } from '../InfoDetail/CosoDetail/cosoDetail';

@Component({
  selector: 'page-moreinfo',
  templateUrl: 'moreInfo.html'
})

export class MoreInfo {
  
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  nameBaseTrangTrai="Tên trang trại ghi ở đây";
  nameBaseGietMo="Tên nơi giết mổ ghi ở đây";
  nameBaseBanSi="Tên cửa hàng bán sỉ ghi ở đây";
  nameBaseCuaHang="Tên cửa hàng ghi ở đây";
  
  trangtraiBase=[{
      name:"Kiêm dịch viên",
      value:"Nguyễn Văn Tài"
    },{
      name:"Ngày kiểm dịch cuối",
      value:"12/8/1992"
    },{
      name:"Ngày bán",
      value:"12/2/1989"
    }
  ]
   gietmoBase=[{
      name:"Kiêm dịch viên",
      value:"Tài Văn Tái"
    },{
      name:"Ngày giết mổ",
      value:"12/8/1992"
    },{
      name:"Ngày bán",
      value:"12/2/1989"
    }
  ]

  bansiBase=[{
      name:"Người nhập kho",
      value:"Tài Văn Khó"
    },{
      name:"Ngày nhập kho",
      value:"12/8/2032"
    },{
      name:"Ngày xuất kho",
      value:"13/9/2033"
    }
  ]

  cuahangBase=[{
      name:"Người nhập kho",
      value:"Tài Văn Khó"
    },{
      name:"Ngày nhập kho",
      value:"12/8/2032"
    },{
      name:"Giá bán",
      value:"20 củ khoai"
    }
  ]
  //method
  public clickTrangTrai(){
    console.log("click Trang Trai");
    this.navCtrl.push(TrangTraiDetail);
    
  }

  public clickGietMo(){
    console.log("click Giet Mo");
    
  }
  
  public clickBanSi(){
    console.log("click Ban Si");
    this.navCtrl.push(CoSoDetail);
  }
  
  public clickCuaHang(){
    console.log("click Cua Hang");
    
  }

 
}