import { Component, Input } from '@angular/core'; 


@Component({
    selector: 'email',
    template: `
      <h3>My Email is :{{email}}</h3>
    `
  })
export class Email{
    @Input() email: String;
}