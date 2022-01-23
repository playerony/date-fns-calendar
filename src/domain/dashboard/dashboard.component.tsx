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
      <Calendar
        mode="month"
        events={events}
        displayWeekends
        enableDateSelection
        onSelectedDatesChange={(selectedDates) =>
          console.log('onSelectedDatesChange', selectedDates)
        }
        onCalendarEventClick={(event) => console.log('onCalendarEventClick', event)}
      />
    </div>
    <div>
      <Typography as="h1">Month calendar without weekends, date selection and header</Typography>
      <Calendar
        mode="month"
        events={events}
        displayWeekends={false}
        enableDateSelection={false}
        components={{ Header: () => null }}
        onSelectedDatesChange={(selectedDates) =>
          console.log('onSelectedDatesChange', selectedDates)
        }
        onCalendarEventClick={(event) => console.log('onCalendarEventClick', event)}
      />
    </div>
    <div>
      <Typography as="h1">Week calendar</Typography>
      <Calendar
        mode="week"
        events={events}
        displayWeekends
        enableDateSelection
        onSelectedDatesChange={(selectedDates) =>
          console.log('onSelectedDatesChange', selectedDates)
        }
        onCalendarEventClick={(event) => console.log('onCalendarEventClick', event)}
      />
    </div>
  </>
);
