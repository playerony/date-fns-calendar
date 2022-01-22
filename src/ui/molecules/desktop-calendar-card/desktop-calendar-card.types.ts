import { ICalendarEvent } from '@interfaces';

export interface IDesktopCalendarCardProps {
  date: Date;
  sameMonth: boolean;
  events: ICalendarEvent[];
}
