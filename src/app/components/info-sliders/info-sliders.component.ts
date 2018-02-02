import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'info-sliders',
  templateUrl: './info-sliders.component.html',
  styleUrls: ['./info-sliders.component.scss']
})
export class InfoSlidersComponent implements OnInit {
  private sections: Section[];

  ngOnInit(): void {
    this.sections = [
      {
        id: 0,
        title: 'Coffee',
        text: 'Lorem ipsum dolor sit amet',
        imageUrl: 'https://truffle-assets.imgix.net/pxqrocxwsjcc_3IxhdvBIPuwIeGmms8mKw4_Cookie-coulant_landscapeThumbnail_en.png',
        buttons: [
          {text: 'Button', action: () => {}}
        ],
        state: State.NEUTRAL
      },
      {
        id: 1,
        title: '3D Printing',
        text: 'Lorem ipsum dolor sit amet',
        imageUrl: 'https://truffle-assets.imgix.net/pxqrocxwsjcc_3IxhdvBIPuwIeGmms8mKw4_Cookie-coulant_landscapeThumbnail_en.png',
        buttons: [
          {text: 'Button 1', action: () => {}},
          {text: 'Button 2', action: () => {}}
        ],
        state: State.NEUTRAL
      },
      {
        id: 2,
        title: 'Classes and Events',
        text: 'Lorem ipsum dolor sit amet',
        imageUrl: 'https://truffle-assets.imgix.net/pxqrocxwsjcc_3IxhdvBIPuwIeGmms8mKw4_Cookie-coulant_landscapeThumbnail_en.png',
        buttons: [
          {text: 'Button', action: () => {}}
        ],
        state: State.NEUTRAL
      },
      {
        id: 3,
        title: 'Online Shop',
        text: 'Lorem ipsum dolor sit amet',
        imageUrl: 'https://truffle-assets.imgix.net/pxqrocxwsjcc_3IxhdvBIPuwIeGmms8mKw4_Cookie-coulant_landscapeThumbnail_en.png',
        buttons: [
          {text: 'Button', action: () => {}}
        ],
        state: State.NEUTRAL
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
