import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'hours-of-operation',
  templateUrl: './hours-of-operation.component.html',
  styleUrls: ['./hours-of-operation.component.scss']
})
export class HoursOfOperationComponent {
  displayedColumns = [
    'category',
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  displayDay = {
    category: '',
    sunday: 'SUN',
    monday: 'MON',
    tuesday: 'TUE',
    wednesday: 'WED',
    thursday: 'THU',
    friday: 'FRI',
    saturday: 'SAT'
  };

  HOURS_OF_OPERATION = [
    {
      category: 'Open',
      sunday: '11:00 AM',
      monday: '8:00 AM',
      tuesday: '8:00 AM',
      wednesday: '8:00 AM',
      thursday: '8:00 AM',
      friday: '8:00 AM',
      saturday: '11:00 AM',
    },
    {
      category: 'Close',
      sunday: '5:00 PM',
      monday: '6:00 PM',
      tuesday: '6:00 PM',
      wednesday: '6:00 PM',
      thursday: '6:00 PM',
      friday: '6:00 PM',
      saturday: '5:00 PM',
    }
  ];

  hours = new MatTableDataSource<HooRow>(this.HOURS_OF_OPERATION);

  isToday(day: string): boolean {
    return day === this.displayedColumns[new Date().getDay() + 1];
  }
}

interface HooRow {
  category: string;
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
}
