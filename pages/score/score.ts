import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'  
})
export class ScoreCard {

  constructor(public navCtrl: NavController) { }
  overs = [{over:[],runs:0,wickets:0}];  
  ballIndex = 0;
  overIndex = 0;
  calculateRun(v){
    this.ballIndex += 1;
    this.overs[thisoverIndex].over.push(v);
    if(v != 'w'){
      this.overs[this.overIndex].runs += v;
    }else{
      this.overs[this.overIndex].wickets += 1;
    }
    if(this.ballIndex == 6){
      var rs = this.overs[this.overIndex].runs, ws = this.overs[this.overIndex].wickets;
      this.overIndex += 1;
      this.overs.push({over:[],runs:rs,wickets:ws});      
      this.ballIndex = 0;
    }
  }

}