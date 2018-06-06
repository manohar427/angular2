import { Component} from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-employee-info',
    template: `<h1>Employee Info ID: {{empId}} and Name:{{name}}</h1>
    <button routerLink="/employee">Go to Employee List</button>
    `
})
export class EmployeeInfo{

    constructor(private route: ActivatedRoute) {}
    empId;
    name;
    ngOnInit() {
        // subscribe to the parameters observable
        this.route.paramMap.subscribe(params => {
         this.empId=params.get('id');
         this.name=params.get('name');
        });
      }
}