import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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

@NgModule({
  declarations: [AppComponent, MyChild, SizerComponent, AppComponentTB, AppTBChildComponent,
    StructuralDirect, Email, SwitchComponents, Form1, TemplateDrivForm, ReactForm,EmployeeList],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,HttpModule],
  // bootstrap: [AppComponent]
  bootstrap: [EmployeeList]
})
export class AppModule { }