import { Component } from '@angular/core';
import {Hero} from './Hero'

@Component({
  selector: 'app-root',
     template: `My hero name is {{hero}} and from {{country}}
     <app-child [xyz]='hero' [abc]='image'></app-child>
     `
    //templateUrl : 'app.component.html'
})
export class AppComponent {
  hero:String ;
  country:String;
  countryList:string[];
  herosList:Hero[];
  image:string;
  flag:boolean;
  isUnchanged:boolean;
  classes:string;
  constructor() {
    this.hero = 'Ramu';
    this.country = 'India';
    this.countryList = ["India","US","UK","China"];
    this.herosList = [
      new Hero(10, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
    ];
    this.image = "D:/Training/Practice/angular2/sample-ang-cli-1/sample2.jpg";
    this.flag = true;
    this.isUnchanged = true;
    this.classes = "special";
  }

 
}

