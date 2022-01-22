import { HTMLAttributes } from 'react';

import { ICalendarEvent } from '@interfaces';

export interface IDesktopCalendarCardProps extends HTMLAttributes<HTMLDivElement> {
  date: Date;
  selected: boolean;
  sameMonth: boolean;
  events: ICalendarEvent[];
}
