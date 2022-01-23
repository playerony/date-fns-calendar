import { ICalendarEvent } from '@interfaces';

export interface ICalendarProps {
  events: ICalendarEvent[];
  onCalendarEventClick: (calendarEvent: ICalendarEvent) => void;

  selectedDates?: Date[];
  mode?: 'week' | 'month';
  defaultSelectedDate?: Date;
  displayWeekends?: boolean;
  defaultSelectedDates?: Date[];
  enableDateSelection?: boolean;
  onSelectedDatesChange?: (selectedDates: Date[]) => void;
}
