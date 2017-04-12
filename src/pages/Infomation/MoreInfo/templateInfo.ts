import { Component,Input} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-templateInfo',
  templateUrl: 'templateInfo.html'
})
export class TemplateInfo {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  @Input() nameOfBase:string;
  @Input() dataOfBase:{
    name:string;
    value:string;
  };
}