import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyChild } from './app.child';
import { SizerComponent } from './app.sizer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponentTB } from './app.appcomponent';
import { AppTBChildComponent } from './app.appChildComponent';
import { StructuralDirect } from './app.str.direct';
import { Email } from './app.email';
import { SwitchComponents } from './app.switch';
import { Form1 } from './app.forms';
import { TemplateDrivForm } from './app.template.driven.form';
import { ReactForm } from './app.reactive.form';
import { EmployeeList } from './app.employee.component';

import { RoutingApp } from './app.routing';
import { Employee } from './app.route.employee';
import { Department } from './app.route.department';
import { NotFound } from './app.route.not-found';
import { EmployeeInfo } from './app.route.employee-info';



const appRoutes: Routes = [
  { path: 'employee', component: Employee },
  { path: 'department', component: Department },
  { path: 'employee-info/:id/:name', component: EmployeeInfo },
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '**', component: NotFound }];



@NgModule({
  declarations: [AppComponent, MyChild, SizerComponent, AppComponentTB, AppTBChildComponent,
    StructuralDirect, Email, SwitchComponents, Form1, TemplateDrivForm, ReactForm, EmployeeList, RoutingApp, Employee, Department, NotFound,EmployeeInfo],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(appRoutes, { enableTracing: false })],
  // bootstrap: [AppComponent]
  bootstrap: [RoutingApp]
})
export class AppModule { }