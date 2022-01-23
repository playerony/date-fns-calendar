import { memo } from 'react';
import classnames from 'classnames';
import { lightFormat } from 'date-fns';

import { Typography } from '@ui';

import { getLastNameInitials } from '@utils';

import { ICalendarEventLabelProps } from './calendar-event-label.types';

import './calendar-event-label.styles.scss';

const CalendarEventLabelComponent = ({
  className,
  event: { start, title },
  ...restProps
}: ICalendarEventLabelProps): JSX.Element => {
  const formattedTitle = getLastNameInitials(title);
  const formattedDate = lightFormat(start ?? new Date(), 'HH:mm');

  return (
    <div className={classnames('calendar-event-label-wrapper', className)} {...restProps}>
      <Typography as="span" ellipsis>{`${formattedDate} - ${formattedTitle}`}</Typography>
    </div>
  );
};

export const CalendarEventLabel = memo(CalendarEventLabelComponent);
