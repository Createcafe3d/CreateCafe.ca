import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'classes-dialog',
  templateUrl: 'classes-dialog.component.html',
  styleUrls: ['classes-dialog.component.scss']
})
export class ClassesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ClassesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openCosplay(): void {
    window.open('https://create-cafe-3d-printing-coffee.myshopify.com/products/design-for-cosplay', '_blank');
  }

  openReverseEngineering(): void {
    window.open('https://create-cafe-3d-printing-coffee.myshopify.com/products/reverse-engineering-using-fusion-360', '_blank');
  }

  open3DDesign(): void {
    window.open('https://create-cafe-3d-printing-coffee.myshopify.com/products/fundamentals-of-digital-design-for-3d-printing', '_blank');
  }

  open3DPrinting(): void {
    window.open('https://create-cafe-3d-printing-coffee.myshopify.com/products/introduction-to-3d-printing', '_blank');
  }

  openOrganicModeling(): void {
    window.open('https://create-cafe-3d-printing-coffee.myshopify.com/products/organic-design-with-sculptris', '_blank');
  }
}
