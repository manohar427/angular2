import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MyChild} from './app.child';

@NgModule({
  declarations: [AppComponent,MyChild],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
