import { Component, ViewChild, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sideMenu') private sideMenu;
  constructor(private menu: MenuService) {}

  ngOnInit(): void {
    this.menu.sideMenu = this.sideMenu;
  }
}
