import { MatSidenav } from '@angular/material';

export class MenuService {
  public sideMenu: MatSidenav;
  public navMenu: MatSidenav;
  public toggleMenu(): void {
    this.sideMenu.toggle();
  }
  public toggleNav(): void {
    this.navMenu.toggle();
  }
}
