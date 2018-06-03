import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MyChild} from './app.child';
import {SizerComponent} from './app.sizer.component';
import { FormsModule }   from '@angular/forms';
import {AppComponentTB} from './app.appcomponent';
import {AppTBChildComponent} from './app.appChildComponent';
import {StructuralDirect} from './app.str.direct';
import {Email} from './app.email';
import {SwitchComponents} from './app.switch';
import {Form1} from './app.forms';
import {TemplateDrivForm} from './app.template.driven.form';

@NgModule({
  declarations: [AppComponent,MyChild,SizerComponent,AppComponentTB,AppTBChildComponent,
    StructuralDirect,Email,SwitchComponents,Form1,TemplateDrivForm],
  imports: [BrowserModule,FormsModule],
 // bootstrap: [AppComponent]
 bootstrap: [TemplateDrivForm]
})
export class AppModule { }