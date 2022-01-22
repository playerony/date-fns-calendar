import classnames from 'classnames';
import { memo, Children } from 'react';
import { getDate, isToday, isWeekend } from 'date-fns';

import { Paper, Divider, Typography, CalendarEventLabel } from '@ui';

import { IDesktopCalendarCardProps } from './desktop-calendar-card.types';

import './desktop-calendar-card.styles.scss';

const DesktopCalendarCardComponent = ({
  date,
  events,
  selected,
  sameMonth,
  ...restProps
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
        selected && 'desktop-calendar-card-wrapper--today',
        weekend && 'desktop-calendar-card-wrapper--weekend',
        !sameMonth && 'desktop-calendar-card-wrapper--other-month',
      )}
      {...restProps}
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

export const DesktopCalendarCard = memo(DesktopCalendarCardComponent);
