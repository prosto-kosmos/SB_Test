import { Component } from '@angular/core';
import data from '../data.json';

@Component({
  selector: 'app-table',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  incomeCounter: number = 0;
  outcomCounter: number = 0;
  investmentCounter: number = 0;
  loansCounter: number = 0;
  totalCounter: number = 0;

  constructor() {
    for (let line of data.data) {
      this.totalCounter += 1;
      switch (line.type) {
        case 'income': {
          this.incomeCounter += 1;
          break;
        }
        case 'outcome': {
          this.outcomCounter += 1;
          break;
        }
        case 'loan': {
          this.investmentCounter += 1;
          break;
        }
        case 'investment': {
          this.loansCounter += 1;
          break;
        }
      }
    }
  }
}
