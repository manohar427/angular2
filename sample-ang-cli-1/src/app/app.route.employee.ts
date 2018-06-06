import { Component} from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-employee',
    template: `<h1>Employee List Component</h1>

    <a *ngFor='let employee of employeeList' [routerLink]="['/employee-info',employee.id,employee.name]">Go to Epmloyee ID:{{employee.name }} Details<br/></a>
    `
})
export class Employee{

    employeeList =[
        {id:100,name:'Ram'},
        {id:200,name:'Drona'},
        {id:300,name:'Kiran'},
        {id:400,name:'Manohar'},
        {id:500,name:'Bhanu'},
        {id:600,name:'Hari'},
        {id:700,name:'Krishna'},
    ]
    
}