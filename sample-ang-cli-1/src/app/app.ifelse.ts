import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h3>Angular 4 If else Demo - 1</h3>    
      <div *ngIf="age; else test1">
         I am in If condition and age is {{age}}
      </div>
      <ng-template #test1> i am in else condition nd age is {{age}}</ng-template>

      <h3>Angular 4 If else Demo - 2</h3>    
      <div *ngIf="age==17; else test2">
         I am in If condition and age is {{age}}
      </div>
      <ng-template #test2> i am in else condition and age is {{age}}</ng-template>

      <h3>Angular 4 If else Demo - 3</h3>    
      <div *ngIf="age==18; then test3 else test4">
      </div>
      <ng-template #test3> i am in if condition and age is {{age}}</ng-template>
      <ng-template #test4> i am in else condition and age is {{age}}</ng-template>
    `,
})
export class IfElseApp {
    age = 17;
}