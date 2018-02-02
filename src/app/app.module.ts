import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageIntroComponent } from './components/page-intro/page-intro.component';
import { HoursOfOperationComponent } from './components/hours-of-operation/hours-of-operation.component';
import { InfoSlidersComponent } from './components/info-sliders/info-sliders.component';


@NgModule({
  declarations: [
    AppComponent, PageHeaderComponent, PageIntroComponent,
    HoursOfOperationComponent, InfoSlidersComponent
  ],
  imports: [
    BrowserModule, MatTableModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
