import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Headway} from "@headwayapp/angular-widget";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Headway
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
