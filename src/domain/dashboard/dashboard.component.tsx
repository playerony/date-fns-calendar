import { addDays, subDays } from 'date-fns';

import { Calendar } from '@ui';

const currentDate = new Date();

export const Dashboard = () => (
  <Calendar
    events={[
      { title: 'John Bon', start: currentDate },
      { title: 'John Blzerian', start: currentDate },
      { title: 'John Smith', start: subDays(currentDate, 3) },
      { title: 'Chuck Norris', start: addDays(currentDate, 5) },
      { title: 'Chuck Norris', start: addDays(currentDate, 3) },
      { title: 'Chuck Norris', start: addDays(currentDate, -4) },
    ]}
    mode="week"
    displayWeekends
    enableDateSelection
    onCalendarEventClick={(event) => console.log('onCalendarEventClick', event)}
    onSelectedDatesChange={(selectedDates) => console.log('onSelectedDatesChange', selectedDates)}
  />
);
