import { Component } from '@angular/core';
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
  `
})
export class StructuralDirect {
   person={name:"Manohar S",age:20}
   // person;
   email1 = "test@gmail.com";
   emails=["email-1","email-2","email-3","email-4","email-5"];
   number=3;
}