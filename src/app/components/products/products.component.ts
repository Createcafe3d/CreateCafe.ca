import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClassesDialogComponent } from '../classes/classes-dialog.component';

@Component({
  selector: 'products-section',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private dialog: MatDialog) {}
  openDayPass(): void {
    window.open('https://create-cafe-3d-printing-coffee.myshopify.com/products/3d-print-pass-1-day', '_blank');
  }
  openMonthPass(): void {
    window.open('https://create-cafe-3d-printing-coffee.myshopify.com/products/3d-printing-membership-1-month', '_blank');
  }
  openClasses(): void {
    this.dialog.open(ClassesDialogComponent);
  }
}
