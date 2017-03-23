import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('slides') slides: any;

     slideOptions: any;
     flashCardFlipped: boolean = false;

     constructor(public navCtrl: NavController, public dataService: Data) {

         this.slideOptions = {
             onlyExternal: true
         };

     }

     ionViewDidLoad() {

     }

     selectAnswer(){
         this.flashCardFlipped = true;
     }
}
