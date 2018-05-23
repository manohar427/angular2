import { Component, Input } from '@angular/core'; 


@Component({
    selector: 'app-child',
    template: `
      <h3>{{abc}} says:</h3>
      <p>I, {{xyz123}}, am at your service.</p>
    `
  })
export class MyChild{
    @Input() abc: String;
    @Input('xyz') xyz123: string;
}