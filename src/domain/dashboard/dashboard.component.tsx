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
        onCalendarEventClick={(event) => console.log('onCalendarEventClick', event)}
        onSelectedDatesChange={(selectedDates) =>
          console.log('onSelectedDatesChange', selectedDates)
        }
      />
    </div>
    <div>
      <Typography as="h1">Month calendar without weekends and date selection</Typography>
      <Calendar
        mode="month"
        events={events}
        displayWeekends={false}
        enableDateSelection={false}
        onCalendarEventClick={(event) => console.log('onCalendarEventClick', event)}
        onSelectedDatesChange={(selectedDates) =>
          console.log('onSelectedDatesChange', selectedDates)
        }
      />
    </div>
    <div>
      <Typography as="h1">Week calendar</Typography>
      <Calendar
        mode="week"
        events={events}
        displayWeekends
        enableDateSelection
        onCalendarEventClick={(event) => console.log('onCalendarEventClick', event)}
        onSelectedDatesChange={(selectedDates) =>
          console.log('onSelectedDatesChange', selectedDates)
        }
      />
    </div>
  </>
);
