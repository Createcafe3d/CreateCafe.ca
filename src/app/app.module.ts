import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule, MatButtonModule, MatCardModule, MatSidenavModule,
  MatIconModule, MatExpansionModule, MatDialogModule, MatToolbarModule, MatListModule } from '@angular/material';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageIntroComponent } from './components/page-intro/page-intro.component';
import { HoursOfOperationComponent } from './components/hours-of-operation/hours-of-operation.component';
import { InfoSlidersComponent } from './components/info-sliders/info-sliders.component';
import { ProfessionalServicesComponent } from './components/professional-services/professional-services.component';
import { MenuService } from './services/menu.service';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ProductsComponent } from './components/products/products.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { InstagramService } from './services/instagram.service';
import { HttpClientModule } from '@angular/common/http';
import { ClassesDialogComponent } from './components/classes/classes-dialog.component';
import { BookingCalendarComponent } from './components/booking-calendar/booking-calendar.component';
import { GoogleCalendarService } from './services/google-calendar.service';
import { CalendarModule } from 'angular-calendar';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';


@NgModule({
  declarations: [
    AppComponent, PageHeaderComponent, PageIntroComponent, SideMenuComponent,
    HoursOfOperationComponent, InfoSlidersComponent, ProfessionalServicesComponent,
    ProductsComponent, PageFooterComponent, ClassesDialogComponent, BookingCalendarComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, Angular2FontawesomeModule,
    MatTableModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconModule, MatExpansionModule,
    MatDialogModule, MatToolbarModule, MatListModule, CalendarModule.forRoot()
  ],
  providers: [MenuService, InstagramService, GoogleCalendarService],
  entryComponents: [ClassesDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
