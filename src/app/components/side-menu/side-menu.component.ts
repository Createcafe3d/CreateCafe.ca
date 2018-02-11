import { Component } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  menuItems: MenuItem[] = [
    {
      title: 'Coffee',
      regPrice: 2.00,
      largePrice: 2.50
    },
    {
      title: 'Americano',
      regPrice: 3.00,
      largePrice: 3.50
    },
    {
      title: 'Espresso',
      regPrice: 3.00
    },
    {
      title: 'Cappuccino',
      regPrice: 3.75
    },
    {
      title: 'Latte',
      regPrice: 4.00,
      largePrice: 4.75,
      variants: ['Caramel Latte', 'Vanilla Latte']
    },
    {
      title: 'Mocha Latte',
      regPrice: 4.50,
      largePrice: 5.25
    },
    {
      title: 'Caramel Machiatto',
      regPrice: 5.00,
      largePrice: 5.75
    },
    {
      title: 'Chai Latte',
      regPrice: 4.50,
      largePrice: 5.25
    },
    {
      title: 'Chocolate Chai',
      regPrice: 4.75,
      largePrice: 5.50
    },
    {
      title: 'Dirty Chai',
      regPrice: 5.25,
      largePrice: 6.00
    },
    {
      title: 'Tea Latte',
      regPrice: 4.50,
      largePrice: 5.25,
      variants: ['London Fog', 'Japanese Mist', 'Cloud']
    },
    {
      title: 'Hot Chocolate',
      regPrice: 3.50,
      largePrice: 4.50
    },
    {
      title: 'Bacon Latte',
      regPrice: 5.50
    },
  ];

  public getPrice(price: number): Price {
    return {
      dollars: price.toFixed(0).toString(),
      cents: (price % 1).toFixed(2).toString().substring(2);
    };
  }
}

interface Price {
  dollars: string;
  cents: string;
}

interface MenuItem {
  title: string;
  regPrice: number;
  largePrice?: number;
  variants?: string[];
}
