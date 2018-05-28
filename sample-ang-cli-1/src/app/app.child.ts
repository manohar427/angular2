import { Component, Input } from '@angular/core'; 


@Component({
    selector: 'app-child',
    template: `
      <h3>{{abc}} says:</h3>
      <p>I, {{xyz123}}, am at your service.</p>
      <input type="button"  on-click="myButton2($event)" value="Button-2"/><br/>
    `
  })
export class MyChild{
    @Input() abc: String;
    @Input('xyz') xyz123: string;
}