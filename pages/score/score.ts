import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'  
})
export class ScoreCard {

  constructor(public navCtrl: NavController) { }
  overs = [];
  over = [];  
  ballIndex = 0;
  overIndex = 1;
  calculateRun(v){
    this.ballIndex += 1;
    this.over.push(v);
    if(this.ballIndex == 6){
      this.overIndex += 1;
      this.overs.push(this.over);
      this.over = [];
      this.ballIndex = 0;
    }
  }

}