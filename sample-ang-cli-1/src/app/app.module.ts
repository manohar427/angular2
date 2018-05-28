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

@NgModule({
  declarations: [AppComponent,MyChild,SizerComponent,AppComponentTB,AppTBChildComponent,StructuralDirect,Email],
  imports: [BrowserModule,FormsModule],
 // bootstrap: [AppComponent]
 bootstrap: [StructuralDirect]
})
export class AppModule { }