import { HTMLAttributes } from 'react';

import { ICalendarEvent } from '@interfaces';

export interface IMobileCalendarCardProps extends HTMLAttributes<HTMLDivElement> {
  date: Date;
  selected: boolean;
  sameMonth: boolean;
  events: ICalendarEvent[];

  onCalendarEventClick: (calendarEvent: ICalendarEvent) => void;
}
