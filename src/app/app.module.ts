import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from './modal';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }