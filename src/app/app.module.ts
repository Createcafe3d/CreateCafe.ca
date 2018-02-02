import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageIntroComponent } from './components/page-intro/page-intro.component';
import { HoursOfOperationComponent } from './components/hours-of-operation/hours-of-operation.component';


@NgModule({
  declarations: [
    AppComponent, PageHeaderComponent, PageIntroComponent,
    HoursOfOperationComponent,
  ],
  imports: [
    BrowserModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
