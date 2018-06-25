import { MyApp } from './../../app/app.component';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the WishListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wish-list',
  templateUrl: 'wish-list.html',
})
export class WishListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public app:MyApp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishListPage');
  }
  back() {

    this.app.openPage('HomePage');
  }

}
