import { Component,NgModule } from '@angular/core';
import {Hero} from './Hero';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  //   template: `My hero name is {{hero}} and from {{country}}
    // <app-child [xyz]='hero' [abc]='image'></app-child>
    // `
     templateUrl : 'app.component.html'
})
export class AppComponent {
  y:number;
  fontSizePx:number = 10;
  hero:String ;
  country:String;
  countryList:string[];
  herosList:Hero[];
  image:string;
  flag:boolean;
  isUnchanged:boolean;
  classes:string;
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  username1 :string;
  username2:string = "";
  username3:string = "";
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
    this.flag = false;
    this.isUnchanged = true;
    this.classes = "special";
  }

  myButton1(event) {
    alert(event.target.value);
  }

  myButton2(event) {
    alert(event.target.value);
  }

  moveOut(event){
     alert(event.target.value);
     this.country = event.target.value;
  }
  childComponentMessae(value){
    console.log('Value from parent Component:'+JSON.stringify(value));
  }
}

