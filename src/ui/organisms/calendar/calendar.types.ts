import { HTMLAttributes } from 'react';

import { ICalendarEvent } from '@interfaces';

export interface ICalendarHeaderProps {
  currentMonth: Date;

  className?: string;

  onLeftArrowClick: () => void;
  onRightArrowClick: () => void;
}

export interface ICalendarCardProps extends HTMLAttributes<HTMLDivElement> {
  date: Date;
  selected: boolean;
  sameMonth: boolean;
  events: ICalendarEvent[];

  onCalendarEventClick?: (calendarEvent: ICalendarEvent) => void;
}

interface IComponents {
  Header: (props: ICalendarHeaderProps) => JSX.Element | null;
}

export interface ICalendarProps {
  events: ICalendarEvent[];

  selectedDates?: Date[];
  mode?: 'week' | 'month';
  components?: IComponents;
  defaultSelectedDate?: Date;
  displayWeekends?: boolean;
  defaultSelectedDates?: Date[];
  enableDateSelection?: boolean;
  onSelectedDatesChange?: (selectedDates: Date[]) => void;
  onCalendarEventClick?: (calendarEvent: ICalendarEvent) => void;
}
