import { Injectable } from '@angular/core';
import { Match } from './match';

@Injectable()
export class MatchService {

  constructor() { }

  getMatchInitials(): Match {
    console.log("service called");
    return {
      players:2,
      overs:1
    }
  } 

}