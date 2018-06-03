import { Component, Input,SimpleChanges } from '@angular/core'; 

@Component({
    selector: 'app-root',
    templateUrl: `app.template.driven.form.html`,
    styles:[`input.ng-invalid{border-left:5px solid red;}
             input.ng-valid{border-left:5px solid green;}
    `]
})
export class TemplateDrivForm{
    myName="Manohar";
    address= {city:"Hyderabad"};
    onSubmit(values:any){
console.log("Data:"+JSON.stringify(values));
    }

}