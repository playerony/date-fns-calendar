import { getDate } from 'date-fns';

import { Paper, Divider, Typography } from '@ui';

import { generateMonth } from '@utils';

export const App = () => {
  const currentMonth = generateMonth();

  return (
    <div
      style={{
        padding: '0.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '0.5em',
      }}
    >
      {currentMonth.map((_currentWeek) => (
        <>
          {_currentWeek.map((_currentDay) => (
            <Paper shadow="sm" padding="sm" style={{ height: '15em' }}>
              <Typography as="h2" color="primary">
                {getDate(_currentDay)}
              </Typography>
              <Divider />
            </Paper>
          ))}
        </>
      ))}
    </div>
  );
};
