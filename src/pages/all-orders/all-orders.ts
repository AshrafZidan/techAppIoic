import { MyApp } from './../../app/app.component';
import { Component } from '@angular/core';
import { IonicPage, NavController,   NavParams, App } from 'ionic-angular';
/**
 * Generated class for the AllOrdersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-orders',
  templateUrl: 'all-orders.html',
})
export class AllOrdersPage {
  Arr = Array; //Array type captured in a variable
  num:number = 2;
  constructor(
    public App:MyApp ,
    public navCtrl: NavController,

    public navParams: NavParams


    ) {
      this.navCtrl = navCtrl
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllOrdersPage');
  }

  back() {

    this.App.openPage('HomePage');
  }

  openPage(namePage){
    this.App.openPage(namePage);
  }


}
