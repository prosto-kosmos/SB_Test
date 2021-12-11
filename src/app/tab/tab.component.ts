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
  json = data;

  constructor(private route: ActivatedRoute) {
    route.queryParams.forEach((element) => {
      this.tab = element['tab'];
    });
  }

  getTypeString(): string {
    switch (this.tab) {
      case '1': {
        return 'income';
      }
      case '2': {
        return 'outcome';
      }
      case '3': {
        return 'loan';
      }
      case '4': {
        return 'investment';
      }
      default: {
        return 'total';
      }
    }
  }
}
