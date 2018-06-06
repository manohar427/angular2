import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <h3>Application Name</h3>
      <nav>
      <a routerLink="employee" routerLinkActive="active">Employee</a>
      <a routerLink="department" routerLinkActive="active">Department</a>          
      </nav>
      <router-outlet></router-outlet>
    `,
    styles:['nav a.active{color:red} nav a{padding: 5px 15px;background-color:blue;border-radius:4px;text-decoration:none;}']
})
export class RoutingApp {
    
}