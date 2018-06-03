import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contacts } from './contact.interface';


@Component({
    selector: 'app-root',
    templateUrl: `react.form.html`
})
export class ReactForm implements OnInit {
    contactInfo: FormGroup;
    ngOnInit() {
        this.contactInfo = new FormGroup(
            {
                name: new FormControl(''),
                contactno: new FormControl(''),
            }
        );


    }

    submit({ value, valid }: { value: Contacts, valid: boolean }) {
        console.log('Form data:' + JSON.stringify(value));
    }
}