import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MenuService } from '../../services/menu.service';
import { MatSidenav } from '@angular/material';
import { GoogleCalendarService } from '../../services/google-calendar.service';

@Component({
  selector: 'info-sliders',
  templateUrl: './info-sliders.component.html',
  styleUrls: ['./info-sliders.component.scss']
})
export class InfoSlidersComponent implements OnInit {
  sections: Section[];

  constructor(private menu: MenuService, private gCal: GoogleCalendarService) {}

  ngOnInit(): void {
    this.sections = [
      {
        id: 0,
        title: 'Coffee',
        text: 'Create Cafe serves a full line of teas & coffee by the cup, or grab 1 pound of beans roasted by Create Coffee.',
        imageUrl: './assets/images/coffee.jpg',
        buttons: [
          {text: 'Create Coffee', action: () => {
            window.open('http://createcoffee.ca', '_blank');
          }},
          {text: 'Menu', action: () => this.menu.toggleMenu()}
        ],
        state: State.NEUTRAL,
        color: 'blue'
      },
      {
        id: 1,
        title: '3D Printing',
        text: 'Create Cafe offers a complete line of professional services to take your idea from concept to in your hands.\
           You can also 3D Print yourself in Create Cafe with a Print Pass for the day or become a monthly member.',
        imageUrl: './assets/images/printing.jpg',
        buttons: [
          {text: 'View Professional Services', action: () => {
            document.getElementById('professional-services').scrollIntoView({
              behavior: 'smooth',
            });
          }},
          {text: 'Printing Pass', action: () => {
            document.getElementById('products-section').scrollIntoView({
              behavior: 'smooth',
            });
          }}
        ],
        state: State.NEUTRAL,
        color: 'red'
      },
      {
        id: 2,
        title: 'Classes & Events',
        text: '3D Printing is limited only by one’s imagination. Create Cafe offers classes on 3D Printing, Designing,\
           and Finishing Techniques to help make 3D Printing a part of your everyday life. View up coming classes and events below.',
        imageUrl: './assets/images/classes.jpg',
        buttons: [
          {text: 'Classes', action: () => {
            this.gCal.changeCalendarVisibility(true);
            document.getElementById('event-calendar').scrollIntoView({
              behavior: 'smooth',
            });
          }}
        ],
        state: State.NEUTRAL,
        color: 'slate'
      },
      {
        id: 3,
        title: 'Online Shop',
        text: 'Looking for a fun 3D Printing project? Our online shop has DIY Headphone kits for you.',
        imageUrl: './assets/images/shop.jpg',
        buttons: [
          {text: 'Shop', action: () => {
            window.open('https://create-cafe-3d-printing-coffee.myshopify.com/', '_target');
          }}
        ],
        state: State.NEUTRAL,
        color: 'green'
      }
    ];
  }

  expandSection(id: number): void {
    this.sections.map(section => {
      section.state = section.id === id ? State.EXPANDED : State.COLLAPSED;
    });
  }

  unExpandSections(): void {
    this.sections.map(section => section.state = State.NEUTRAL);
  }

  toggleExpand(section: Section) {
    if (this.isExpanded(section.state)) {
      this.unExpandSections();
    } else {
      this.expandSection(section.id);
    }
  }

  isExpanded(state: State): boolean {
    return state === State.EXPANDED;
  }

  isCollapsed(state: State): boolean {
    return state === State.COLLAPSED;
  }
}

export interface Section {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
  buttons: Button[];
  state: State;
  color: string;
}

export interface Button {
  text: string;
  action: () => void;
}

enum State {
  NEUTRAL = 0,
  COLLAPSED,
  EXPANDED
}
