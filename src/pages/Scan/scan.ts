import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//This using for BarcodeScanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//this is using for Loading page
import { LoadingController } from 'ionic-angular';
import { SimpleInfo } from '../Infomation/simpleInfo';
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  providers: [
    BarcodeScanner

  ],
})

export class Scan {
  public name ="Mrkeys";
  public readyData = false;
  public codeInput;
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,
              public loadingCtrl: LoadingController) {  
    this.navCtrl = navCtrl;  
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
  goTosimpleInfoPage(){
    this.navCtrl.push(SimpleInfo);
  }
  ScanCode(){
    //this.presentLoading();
    this.readyData = false;
    this.barcodeScanner.scan({
    prompt: ("Scan for BarCode - evalute"),   
    }).then((barcodeData) => {
      this.readyData = true;
      // Success! Barcode data is here
     this.name = barcodeData.text;
     this.codeInput = barcodeData.text;
     this.goTosimpleInfoPage();
     console.log(barcodeData);
    
    }, (err) => {
      // An error occurred
    });
  }
  clearInput(){
    this.codeInput = "";
    console.log("Clear Input Function");
  }
  enterInput(){
    console.log("Enter Input Function");
    console.log(this.codeInput);
    this.goTosimpleInfoPage();
    
  }
}
