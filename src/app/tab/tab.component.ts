import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../data.json';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  tab: any;
  types: any = {
    0: "total",
    1: "income",
    2: "outcome",
    3: "loan",
    4: "investment",
  };
  rows: any = {
    income: new Array,
    outcome: new Array,
    loan: new Array,
    investment: new Array,
    total: new Array,
  };

  constructor(private route: ActivatedRoute) {
    route.queryParams.forEach((element) => {
      this.tab = element['tab'];
    });
    
    for(let line of data.data){
      this.rows.total.push(line)
      this.rows[line.type].push(line)
    }   
  }

  getRows() {
    return this.rows[this.types[this.tab]];
  }
}
