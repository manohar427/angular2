import { Component} from '@angular/core'; 

@Component({
    selector: 'app-employee',
    template: `<h1>Employee Component</h1>
    <button routerLink="/department">Go to department</button>
    `
})
export class Employee{
   
}