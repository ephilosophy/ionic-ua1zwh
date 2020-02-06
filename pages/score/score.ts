import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'  
})
export class ScoreCard {

  constructor(public navCtrl: NavController) { }
  overs = [];
  ballValue = 0;
  calculateRun(v){
    ballValue = v;
    overs.push(v);
  }

}