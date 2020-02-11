import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'  
})
export class ScoreCard {

  constructor(public navCtrl: NavController) { }
  overs = [];
  over = [0,1,2,3];  
  ballIndex = 1;
  calculateRun(v){
    ballIndex += 1;
    over.push(v);
    if(ballIndex == 6){
      overs.push(over);
      ballIndex = 1;
    }
  }

}