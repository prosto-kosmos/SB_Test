import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from './data.json';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  tag: any;

  constructor(private route: ActivatedRoute) {
    route.queryParams.forEach((element) => {
      this.tag = element['tab'];
    });
  }

  getTypeString(): string{
    switch(this.tag){
      case '0':{
        return "income";
      }
      case '1':{
        return "outcome";
      }
      case '2':{
        return "loan";
      }
      case '3':{
        return "investment";
      }
      default: {
        return "";
      }
    }
  }
  json = data;
  type = 'outcome';
}
