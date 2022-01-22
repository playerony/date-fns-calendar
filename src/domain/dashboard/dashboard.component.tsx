import { isSameMonth } from 'date-fns';
import { Children, useState } from 'react';

import { DesktopCalendarCard } from '@ui';

import { generateMonth } from '@utils';

export const Dashboard = () => {
  const [selectedDate] = useState(new Date());

  const currentMonth = generateMonth(selectedDate);

  return (
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
  );
};
