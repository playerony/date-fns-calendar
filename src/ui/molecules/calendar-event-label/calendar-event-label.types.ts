import { HTMLAttributes } from 'react';

import { ICalendarEvent } from '@interfaces';

export interface ICalendarEventLabelProps extends HTMLAttributes<HTMLDivElement> {
  event: ICalendarEvent;

  className?: string;
}
