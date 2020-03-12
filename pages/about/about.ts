import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
 
  
  submit(numberOfPlayers,numberOfOvers){
    console.log("1---",numberOfPlayers);
    console.log("2---",numberOfOvers);
    
  }

}
