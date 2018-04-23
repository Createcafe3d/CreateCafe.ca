import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GOOGLE_CALENDAR_API_KEY } from './access-token';
import { CalendarEvent } from 'angular-calendar';
import { EventAction } from 'calendar-utils';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GoogleCalendarService {
  events: BehaviorSubject<CalendarEvent[]> = new BehaviorSubject<CalendarEvent[]>([]);

  startDate: Date = this.startOfMonth(new Date());
  endDate: Date = this.endOfMonth(new Date());

  showCalendar = false;

  constructor(private http: HttpClient) {}

  get events$(): Observable<CalendarEvent[]> {
    return this.events.asObservable();
  }

  fetchEvents(): Observable<any> {
    let url = 'https://www.googleapis.com/calendar/v3/calendars/aim7hnf2o9d9fs02a9uct425dg%40group.calendar.google.com/events?key=';
    url += GOOGLE_CALENDAR_API_KEY;
    if (this.startDate) {
      url += '&timeMin=' + this.startDate.toISOString();
    }
    if (this.endDate) {
      url += '&timeMax=' + this.endDate.toISOString();
    }
    const httpCall = this.http.get(url);
    httpCall.subscribe((response: {items: GoogleCalendarEvent[]}) => {
      const newEvents = [];
      response.items.forEach((item) => {
        const actions: EventAction[] = [];
        const splitDescription = item.description.split('<a href=\"');
        const description = splitDescription[0];
        if (splitDescription.length > 1) {
          const link = splitDescription[1].split('target="_blank">')[1].split('</a>')[0];
          actions.push({
            label: 'Book Now',
            onClick: () => {
              window.open(link, '_blank');
            }
          });
        }
        newEvents.push({
          id: item.id,
          meta: {
            description: description,
          },
          start: new Date(item.start.dateTime),
          title: item.summary,
          actions: actions
        });
      });
      this.events.next(newEvents);
    });
    return httpCall;
  }

  startOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
  }

  endOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0, 0);
  }

  prevMonth(): Observable<any> {
    this.startDate.setMonth(this.startDate.getMonth() - 1);
    this.endDate.setMonth(this.endDate.getMonth() - 1);
    return this.fetchEvents();
  }

  nextMonth(): Observable<any> {
    this.startDate.setMonth(this.startDate.getMonth() + 1);
    this.endDate.setMonth(this.endDate.getMonth() + 1);
    return this.fetchEvents();
  }

  changeCalendarVisibility(show?: boolean) {
    this.showCalendar = show || !this.showCalendar;
  }
}

export interface GoogleCalendarEvent {
  created: Date;
  description: string;
  id: string;
  summary: string;
  start: {
    dateTime: Date;
  };
}
