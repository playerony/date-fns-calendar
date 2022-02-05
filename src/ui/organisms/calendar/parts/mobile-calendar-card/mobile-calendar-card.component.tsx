import classnames from 'classnames';
import { getDate, isToday, isWeekend } from 'date-fns';
import { Children, memo } from 'react';

import { CalendarEventLabel, Divider, Paper, Typography } from '@ui';

import { ICalendarEvent } from '@interfaces';

import { ICalendarCardProps } from '../../calendar.types';
import './mobile-calendar-card.styles.scss';

const MobileCalendarCardComponent = ({
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
        'mobile-calendar-card-wrapper',
        today && 'mobile-calendar-card-wrapper--today',
        weekend && 'mobile-calendar-card-wrapper--weekend',
        selected && 'mobile-calendar-card-wrapper--selected',
        !sameMonth && 'mobile-calendar-card-wrapper--other-month',
      )}
      padding="sm"
      shadow="sm"
      {...restProps}
    >
      <span className="mobile-calendar-card-wrapper__left-content">
        <Typography as="h2" color="primary">
          {formattedDate}
        </Typography>
        <Divider orientation="vertical" />
      </span>
      <section className="mobile-calendar-card-wrapper__events">
        {Children.toArray(
          events.map((_event) => (
            <CalendarEventLabel event={_event} onClick={handleCalendarEventClick(_event)} />
          )),
        )}
      </section>
    </Paper>
  );
};

export const MobileCalendarCard = memo(MobileCalendarCardComponent);
