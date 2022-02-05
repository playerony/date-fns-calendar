import { addDays, subDays } from 'date-fns';

import { Calendar, Typography } from '@ui';

const currentDate = new Date();

const events = [
  { title: 'John Bon', start: currentDate },
  { title: 'John Blzerian', start: currentDate },
  { title: 'John Smith', start: subDays(currentDate, 3) },
  { title: 'Chuck Norris', start: addDays(currentDate, 5) },
  { title: 'Chuck Norris', start: addDays(currentDate, 3) },
  { title: 'Chuck Norris', start: addDays(currentDate, -4) },
];

export const Dashboard = () => (
  <>
    <div>
      <Typography as="h1">Month calendar</Typography>
      <Calendar displayWeekends enableDateSelection events={events} mode="month" />
    </div>
    <div>
      <Typography as="h1">Month calendar without weekends, date selection and header</Typography>
      <Calendar
        components={{ Header: () => null }}
        displayWeekends={false}
        enableDateSelection={false}
        events={events}
        mode="month"
      />
    </div>
    <div>
      <Typography as="h1">Week calendar</Typography>
      <Calendar displayWeekends enableDateSelection events={events} mode="week" />
    </div>
  </>
);
