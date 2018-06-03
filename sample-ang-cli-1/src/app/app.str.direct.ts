import { Component,SimpleChanges,OnChanges } from '@angular/core';
import { Email } from './app.email';


 
@Component({
  selector: 'app-root',
  template: `ngif example: 
             <div *ngIf="person">Hello {{person.name}} and {{person.age}}</div>
             ngfor example: 
              <div *ngFor="let email of emails;let i=index;let e=even;let o=odd;let f=first;let l=last">
                    {{i+1}}:{{email}}:{{e}}:{{o}}:Fisrt:{{f}}:Last:{{l}}
              </div>
             <email *ngFor="let email of emails" [email]='email'></email>

             ngSwitch example: 
             <div [ngSwitch]='number'>
                 <div *ngSwitchCase="'1'">One</div>
                 <div *ngSwitchCase="'2'">Two</div>
                 <div *ngSwitchCase="'3'">Three</div>
             </div>
             
            <div>
             <label *ngFor='let x of emails' >
               <input type='radio' name='' [(ngModel)]='seleEmail' [value]='x'>{{x}}
             </label>
             </div>
             <div [ngSwitch]='seleEmail'>
                  <app-switch1  *ngSwitchCase="'Email-1'" [selValue]='seleEmail'></app-switch1>
                  <app-switch2  *ngSwitchCase="'email-2'" [selValue]='seleEmail'></app-switch2>
                  <app-switch3  *ngSwitchCase="'email-3'" [selValue]='seleEmail'></app-switch3>
                  <app-switch4  *ngSwitchCase="'email-4'" [selValue]='seleEmail'></app-switch4>
                  <app-switch5  *ngSwitchCase="'Email-5'" [selValue]='seleEmail'></app-switch5>
                  <div *ngSwitchDefault>Default-{{seleEmail}}</div>
             </div>
             Personname1 :<div *ngIf='person'>{{person?.name}}</div>
             Personname2 :<div *ngIf='person'>{{person.gender}}</div>
             <br/>
             <input type='text' [(ngModel)]='test'/>
             <br/>
             {{test}}
             <br/>
             <test-switch [sample]=test></test-switch>

  `
})
export class StructuralDirect{
    person={name:"Manohar S",age:20}
   // person;
   email1 = "test@gmail.com";
   emails=["Email-1","email-2","email-3","email-4","Email-5","email-6"];
   number=3;
   seleVal="One";
   seleEmail="";
   test;
   cars = new Array();

   ngOnInit() { 
    console.log('....................ngOnInit().................');
  }
  
 constructor(){
  console.log('....................constructor()-StructuralDirect.................');
 }

 ngOnDestroy(){
  console.log('....................ngOnDestroy()-.................................');
 }

 ngDoCheck() {
  this.cars.push(this.test);
  console.log('....................ngDoCheck()-.................................'+JSON.stringify(this.cars));
 }
}