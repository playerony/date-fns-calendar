import { HTMLAttributes } from 'react';

import { ICalendarEvent } from '@interfaces';

export interface ICalendarHeaderProps {
  className?: string;

  currentMonth: Date;

  onLeftArrowClick: () => void;
  onRightArrowClick: () => void;
}

export interface ICalendarCardProps extends HTMLAttributes<HTMLDivElement> {
  date: Date;
  events: ICalendarEvent[];
  onCalendarEventClick?: (calendarEvent: ICalendarEvent) => void;
  sameMonth: boolean;
  selected: boolean;
}

interface IComponents {
  Header: (props: ICalendarHeaderProps) => JSX.Element | null;
}

export interface ICalendarProps {
  components?: IComponents;
  defaultSelectedDate?: Date;
  defaultSelectedDates?: Date[];
  displayWeekends?: boolean;
  enableDateSelection?: boolean;
  events: ICalendarEvent[];
  mode?: 'week' | 'month';
  onCalendarEventClick?: (calendarEvent: ICalendarEvent) => void;
  onSelectedDatesChange?: (selectedDates: Date[]) => void;
  selectedDates?: Date[];
}
