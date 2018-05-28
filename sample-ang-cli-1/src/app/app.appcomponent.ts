import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `
  <countercomponent [(counter)]="counterValue"></countercomponent>
  <br/>
  Parent Component Value:{{counterValue}}
  `
})
export class AppComponentTB {
       counterValue:number=10;
}