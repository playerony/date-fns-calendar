import classnames from 'classnames';
import { getMonth, getYear } from 'date-fns';

import { Button, Typography } from '@ui';

import { getMonthNameById } from '@utils';

import { ICalendarHeaderProps } from '../../calendar.types';

import './default-calendar-header.styles.scss';

export const DefaultCalendarHeader = ({
  className,
  currentMonth,
  onLeftArrowClick,
  onRightArrowClick,
}: ICalendarHeaderProps): JSX.Element => {
  const monthName = getMonthNameById(getMonth(currentMonth));

  return (
    <div className={classnames('default-calendar-header-wrapper', className)}>
      <Button size="small" onClick={onLeftArrowClick}>
        Prev
      </Button>
      <Button size="small" onClick={onRightArrowClick}>
        Next
      </Button>
      <Typography strong as="h2">
        {`${monthName} ${getYear(currentMonth)}`}
      </Typography>
    </div>
  );
};
