import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GoogleCalendarService } from '../../services/google-calendar.service';
import { CalendarEvent } from 'angular-calendar';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.scss']
})
export class BookingCalendarComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer, private gCalendar: GoogleCalendarService) {}

  ngOnInit() {
    this.gCalendar.fetchEvents();
  }

  get events$(): Observable<CalendarEvent[]> {
    return this.gCalendar.events$;
  }

  get showCalendar(): boolean {
    return this.gCalendar.showCalendar;
  }

  get viewDate(): Date {
    return this.gCalendar.startDate;
  }

  toggleShowCalendar(): void {
    this.gCalendar.changeCalendarVisibility();
  }

  prevMonth(): void {
    this.gCalendar.prevMonth();
  }

  nextMonth(): void {
    this.gCalendar.nextMonth();
  }

  get buttonText(): string {
    return this.showCalendar ? 'Hide Calendar' : 'Show Calendar';
  }

  get currentView(): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    return `${months[this.viewDate.getMonth()]} ${this.viewDate.getFullYear()}`;
  }
}
