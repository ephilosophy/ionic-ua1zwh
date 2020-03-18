import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService } from '../../app/storage.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[StorageService] 
})
export class AboutPage {

  constructor(public navCtrl: NavController, public storageService:StorageService) {

  }
 
  
  submit(numberOfPlayers,numberOfOvers){
    this.storageService.setObject('match_init',{
      players:numberOfPlayers,overs:numberOfOvers
    });

    this.storageService.getObject('match_init').then(result => {
      console.log(result)
    })
  }

}
