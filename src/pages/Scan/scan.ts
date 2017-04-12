import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
//This using for BarcodeScanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//this is using for Loading page
import { LoadingController } from 'ionic-angular';
import { SimpleInfo } from '../Infomation/SimpleInfo/simpleInfo';
import { BackandService } from '../Service/backandService';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  providers: [
    BarcodeScanner

  ],
})

export class Scan {
  public items:any[] = [];
  public name ="Mrkeys";
  public readyData = false;
  public codeInput;
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,
              private loadingCtrl: LoadingController,private backandService:BackandService) {  
    this.navCtrl = navCtrl;  
  }
  //mothod
  public presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
  //Push Page Info Simple
  public goTosimpleInfoPage(){
    this.navCtrl.push(SimpleInfo);
  }
  //Function check code QR or Bar from camera
  public ScanCode(){
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
  //Clear Input in box code
  public clearInput(){
    this.codeInput = "";
    console.log("Clear Input Function");
    this.getItems('SuperMarket'); 
    this.getOne('SuperMarket','1')  ;
  }
  //Function for Enter button
  public enterInput(){
    console.log("Enter Input Function");
    console.log(this.codeInput);
    this.goTosimpleInfoPage();
  }
  //Get item form backand service
  public getItems(request:string) {
       this.backandService.getList(request)
            .subscribe(
                data => {
                    console.log(data);
                    this.items = data;
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
    }
      public getOne(request:string,id:string) {
       this.backandService.getOne(request,id)
            .subscribe(
                data => {
                    console.log(data);
                    this.items = data;
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
    }
}
