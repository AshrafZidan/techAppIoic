import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {Http, HttpModule } from '@angular/http';
import { TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// General Classes /////////////////////////////////////////////
import { Language } from './language';


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// Providers /////////////////////////////////////////////

import { AuthentcationServices } from './../../providers/authentcation-services';



 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// Language File //////////////////////////////////////////////

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    Language,
  ],
  imports: [
    IonicPageModule.forChild(Language),   
     TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  exports: [
    Language
  ],
  providers:[AuthentcationServices]
})
export class LanguageModule {}