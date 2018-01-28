import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  hasHeaderScrolled = false;
  darkenScrollHeight = 50;
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
}
