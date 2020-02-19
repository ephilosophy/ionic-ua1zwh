import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'  
})
export class ScoreCard {

  constructor(public navCtrl: NavController) { }
  innings = [[{over:[],runs:0,wickets:0}]];
  innIndex = 0;  
  ballIndex = 0;
  overIndex = 0;
  result = '';
  matchComplete = false;

  calculateRun(v){
    this.ballIndex += 1;
    this.innings[this.innIndex][this.overIndex].over.push(v);
    if(v != 'w'){
      this.innings[this.innIndex][this.overIndex].runs += v;
    }else{
      this.innings[this.innIndex][this.overIndex].wickets += 1;
    }
    if(this.ballIndex == 6){
      var rs = this.innings[this.innIndex][this.overIndex].runs, ws = this.innings[this.innIndex][this.overIndex].wickets;
      this.overIndex += 1;
      this.innings[this.innIndex].push({over:[],runs:rs,wickets:ws});      
      this.ballIndex = 0;
    }
  }

  completeInning(inn){
    
    if(inn != 1){
      this.innings.push([{over:[],runs:0,wickets:0}]);
      this.innIndex += 1;
      this.overIndex = 0;
    }else{
      this.matchComplete = true;
      var firstInning = this.innings[0];      
      var secondInning = this.innings[1];
      var firstInningRuns = firstInning[firstInning.length-1].runs;
      var firstInningWickets = firstInning[firstInning.length-1].wickets;
      var secondInningRuns = secondInning[secondInning.length-1].runs;
      var secondInningWickets = secondInning[secondInning.length-1].wickets;
      if(firstInningRuns > secondInningRuns){
        this.result = "Inning 1 won by "+(firstInningRuns - secondInningRuns)+" runs.";
      }
      if(firstInningRuns < secondInningRuns){
        this.result = "Inning 2 won by "+(10 - secondInningWickets)+" wickets.";
      }
      if(firstInningRuns==secondInningRuns){
        this.result = "Its a Tie..";
      }
    }
  }

}