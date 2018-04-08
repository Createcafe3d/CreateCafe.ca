import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconModule, MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageIntroComponent } from './components/page-intro/page-intro.component';
import { HoursOfOperationComponent } from './components/hours-of-operation/hours-of-operation.component';
import { InfoSlidersComponent } from './components/info-sliders/info-sliders.component';
import { ProfessionalServicesComponent } from './components/professional-services/professional-services.component';
import { MenuService } from './services/menu.service';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AppComponent, PageHeaderComponent, PageIntroComponent, SideMenuComponent,
    HoursOfOperationComponent, InfoSlidersComponent, ProfessionalServicesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatTableModule, MatButtonModule,
    MatCardModule, MatSidenavModule, MatIconModule, MatExpansionModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
