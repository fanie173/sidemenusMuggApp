import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{RegPage} from '../reg/reg';
import {LoginPage} from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  regPage(){
    this.navCtrl.push(RegPage);
  }
  login(){
    this.navCtrl.push(LoginPage);
  }

}
