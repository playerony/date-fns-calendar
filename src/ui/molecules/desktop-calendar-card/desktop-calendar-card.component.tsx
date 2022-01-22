import { Children } from 'react';
import classnames from 'classnames';
import { getDate, isToday, isWeekend } from 'date-fns';

import { Paper, Divider, Typography, CalendarEventLabel } from '@ui';

import { IDesktopCalendarCardProps } from './desktop-calendar-card.types';

import './desktop-calendar-card.styles.scss';

export const DesktopCalendarCard = ({
  date,
  events,
  sameMonth,
}: IDesktopCalendarCardProps): JSX.Element => {
  const formattedDate = getDate(date).toString().padStart(2, '0');

  const today = isToday(date);
  const weekend = isWeekend(date);

  return (
    <Paper
      shadow="sm"
      padding="sm"
      className={classnames(
        'desktop-calendar-card-wrapper',
        today && 'desktop-calendar-card-wrapper--today',
        !sameMonth && 'desktop-calendar-card-wrapper--other-month',
        weekend && 'desktop-calendar-card-wrapper--weekend',
      )}
    >
      <Typography as="h2" color="primary">
        {formattedDate}
      </Typography>
      <Divider />
      <section className="desktop-calendar-card-wrapper__events">
        {Children.toArray(events.map((_event) => <CalendarEventLabel event={_event} />))}
      </section>
    </Paper>
  );
};
