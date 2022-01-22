import { Children, useState } from 'react';
import { isSameMonth, getMonth, addMonths, subMonths, getYear } from 'date-fns';

import { Typography, DesktopCalendarCard } from '@ui';

import { generateMonth, getMonthNameById } from '@utils';

export const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const currentMonth = generateMonth(selectedDate);

  const onRightArrowClick = () => {
    const newSelectedDate = addMonths(selectedDate, 1);

    setSelectedDate(newSelectedDate);
  };

  const onLeftArrowClick = () => {
    const newSelectedDate = subMonths(selectedDate, 1);

    setSelectedDate(newSelectedDate);
  };

  return (
    <div>
      <Typography as="h2" strong>
        <span onClick={onLeftArrowClick}>{'< '}</span>
        <span onClick={onRightArrowClick}>{' >'}</span>
        {`${getMonthNameById(getMonth(selectedDate))} ${getYear(selectedDate)}`}
      </Typography>
      <div
        style={{
          padding: '0.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0.5em',
        }}
      >
        {Children.toArray(
          currentMonth.map((_currentWeek) => (
            <>
              {Children.toArray(
                _currentWeek.map((_currentDay) => {
                  const sameMonth = isSameMonth(selectedDate, _currentDay);

                  return (
                    <DesktopCalendarCard
                      date={_currentDay}
                      sameMonth={sameMonth}
                      events={[
                        { title: 'John Smith', start: new Date() },
                        { title: 'John Smith', start: new Date() },
                        { title: 'John Smith', start: new Date() },
                      ]}
                    />
                  );
                }),
              )}
            </>
          )),
        )}
      </div>
    </div>
  );
};
