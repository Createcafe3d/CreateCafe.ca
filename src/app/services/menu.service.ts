import { MatSidenav } from '@angular/material';

export class MenuService {
  public sideMenu: MatSidenav;
  public toggleMenu(): void {
    this.sideMenu.toggle();
  }
}
