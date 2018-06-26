import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyApp } from '../../app/app.component';



 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// Providers /////////////////////////////////////////////
// import { AuthentcationServices } from './../../providers/authentcation-services';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public myapp:MyApp ,
    public navCtrl: NavController,

    public navParams: NavParams
 ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  home() {
    //////////////////////////////// in side /////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
    //  let loading = this.loading.create({
    //    content: this.pleaseWait
    //  });
    //  loading.present();
    //  this.authServices.userLogin(this.userName, this.password, this.browserType, this.osType,this.language).subscribe(
    //   data => {
    //     console.log(data);
    //     sessionData.saveDataInsession(data);
    //     sessionData.saveDataInLocalStorage();

    //     if(data.userDetails.validMobile==false){
    //       sessionData.saveDataInLoginToVerifyCode(this.password);
    //       this.navCtrl.push("Verifypage");
    //     }else{
          this.navCtrl.push("HomePage")
          //     }

    //       this.isCorrect = true;



    //       loading.dismiss();
    //      }, error => {
    //      this.isCorrect = false;
    //      loading.dismiss();
    //    }
    //  );
  }


  /////////////////////////////////////////////////////////// open any page you want /////////////////////////////////
  openPage(namePage){
    this.navCtrl.push(namePage);
  }



}
