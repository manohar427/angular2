import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
    selector: 'app-root',
    template: `
      <h3>EmployeeList</h3>
      <table border='1'>
      <tr>
          <th>ID</th>
          <th>Email</th>
      </tr>
      <tr *ngFor='let employee of employeeList'>
       <td>{{employee.id}}</td>
       <td>{{employee.email}}</td>
      </tr>
      </table>
    `,
    providers: [EmployeeService]
})
export class EmployeeList implements OnInit {
    employeeList=[];
    temp=[];
    constructor(private _empservice: EmployeeService) {
    }
    ngOnInit() {
       // this._empservice.getEmployees().subscribe(resData=>this.employeeList=resData);
        this._empservice.getEmployees1().then(re=>this.employeeList=re);
        console.log(JSON.stringify(this.employeeList));
    }
}