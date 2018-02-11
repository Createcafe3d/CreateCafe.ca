export class MenuService {
  menuOpen = false;
  public get menuOpened(): boolean {
    return true;
    // return this.menuOpen;
  }
  public set menuOpened(isOpen: boolean) {
    this.menuOpen = isOpen;
  }
  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
