import { Component } from '@angular/core'; 

@Component({
    selector: 'app-root',
    template: `Input:<input (keyup)=onKey($event)/><br/>
               Entered Value is:{{test}}<br/>
               <input #abc (keyup)="0">
               {{abc.value}}
               <br/>Keyup enter:
               <input #xyz (keyup.enter)="0">
               {{xyz.value}}<br/>
               Put it all together:<input #aaa />
               <input type='button' value='Add' (click)="addAll(aaa.value);aaa.value=''"/>
               <br/>Values:<ul>
               <li *ngFor='let x of all'>{{x}}</li>
               </ul>
               `
})
export class Form1{
   test:string = "";
   all=[];
    onKey(event:any){
        this.test += event.target.value + ' | ';
        console.log("Message is :"+this.test)
    }
    addAll(val){
        this.all.push(val);
    }
}