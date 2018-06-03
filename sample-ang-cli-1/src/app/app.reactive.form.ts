import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacts } from './contact.interface';


@Component({
    selector: 'app-root',
    templateUrl: `react.form.html`
})
export class ReactForm implements OnInit {
    contactInfo: FormGroup;
    ngOnInit() {
        /*  this.contactInfo = new FormGroup(
              {
                  name: new FormControl('Manohar'),
                  contactno: new FormControl('99887744'),
              }
          );*/
        this.contactInfo = this.fb.group(
            {
                name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(4)]],
                contactno: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]]
            }
        );
    }
    constructor(private fb: FormBuilder) {

    }
    submit({ value, valid }: { value: Contacts, valid: boolean }) {
        console.log('Form data:' + JSON.stringify(value));
    }
}