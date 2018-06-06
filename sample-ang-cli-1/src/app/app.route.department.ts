import { Component} from '@angular/core'; 

@Component({
    selector: 'app-department',
    template: `<h1>Department Component</h1>
    <button routerLink="/employee">Go to employee</button>
    `
})
export class Department{
   
}