import { memo } from 'react';
import { lightFormat } from 'date-fns';

import { Typography } from '@ui';

import { getLastNameInitials } from '@utils';

import { ICalendarEventLabelProps } from './calendar-event-label.types';

import './calendar-event-label.styles.scss';

const CalendarEventLabelComponent = ({
  event: { start, title },
}: ICalendarEventLabelProps): JSX.Element => {
  const formattedTitle = getLastNameInitials(title);
  const formattedDate = lightFormat(start ?? new Date(), 'HH:mm');

  return (
    <div className="calendar-event-label-wrapper">
      <Typography as="span" ellipsis>{`${formattedDate} - ${formattedTitle}`}</Typography>
    </div>
  );
};

export const CalendarEventLabel = memo(CalendarEventLabelComponent);
