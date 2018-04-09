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
      sunday: '11',
      monday: '8',
      tuesday: '8',
      wednesday: '8',
      thursday: '8',
      friday: '8',
      saturday: '11',
      ampm: 'am'
    },
    {
      category: 'Close',
      sunday: '5',
      monday: '6',
      tuesday: '6',
      wednesday: '6',
      thursday: '6',
      friday: '6',
      saturday: '5',
      ampm: 'pm'
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
  ampm: string;
}
