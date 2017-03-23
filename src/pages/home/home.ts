import { Component } from '@angular/core';
import {MattDamonPipe} from '../../pipes/matt-damon'

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title ="Parallax Header";
  constructor(public navCtrl: NavController) {

  }

}
