import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  hasHeaderScrolled = false;
  darkenScrollHeight = 50;
  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
        if (typeof window.pageYOffset === 'number') {
            this.hasHeaderScrolled = window.pageYOffset > this.darkenScrollHeight;
        }
    });
  }
  get condenseHeader(): boolean {
    return this.hasHeaderScrolled;
  }
  toggleMenu(): void {
    this.menuService.toggleMenu();
  }
  toggleNav(): void {
    this.menuService.toggleNav();
  }
}
