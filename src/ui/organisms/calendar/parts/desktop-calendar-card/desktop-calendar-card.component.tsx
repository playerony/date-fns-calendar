import classnames from 'classnames';
import { getDate, isToday, isWeekend } from 'date-fns';
import { Children, memo } from 'react';

import { CalendarEventLabel, Divider, Paper, Typography } from '@ui';

import { ICalendarEvent } from '@interfaces';

import { ICalendarCardProps } from '../../calendar.types';

import './desktop-calendar-card.styles.scss';

const DesktopCalendarCardComponent = ({
  date,
  events,
  onCalendarEventClick,
  sameMonth,
  selected,
  ...restProps
}: ICalendarCardProps): JSX.Element => {
  const formattedDate = getDate(date).toString().padStart(2, '0');

  const today = isToday(date);
  const weekend = isWeekend(date);

  const handleCalendarEventClick = (calendarEvent: ICalendarEvent) => () =>
    onCalendarEventClick && onCalendarEventClick(calendarEvent);

  return (
    <Paper
      className={classnames(
        'desktop-calendar-card-wrapper',
        today && 'desktop-calendar-card-wrapper--today',
        weekend && 'desktop-calendar-card-wrapper--weekend',
        selected && 'desktop-calendar-card-wrapper--selected',
        !sameMonth && 'desktop-calendar-card-wrapper--other-month',
      )}
      padding="sm"
      shadow="sm"
      {...restProps}
    >
      <Typography as="h2" color="primary">
        {formattedDate}
      </Typography>
      <Divider />
      <section className="desktop-calendar-card-wrapper__events">
        {Children.toArray(
          events.map((_event) => (
            <CalendarEventLabel event={_event} onClick={handleCalendarEventClick(_event)} />
          )),
        )}
      </section>
    </Paper>
  );
};

export const DesktopCalendarCard = memo(DesktopCalendarCardComponent);
