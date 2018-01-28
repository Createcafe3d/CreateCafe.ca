import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageIntroComponent } from './components/page-intro/page-intro.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent, PageIntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
