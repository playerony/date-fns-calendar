import { addDays, addMinutes, startOfDay, startOfWeek } from 'date-fns';

import { isDate } from '@utils';

export const generateWeek = (date: Date = new Date()) => {
  if (!isDate(date)) {
    return [];
  }

  console.log(date.getTimezoneOffset());
  const todayStartDate = addMinutes(startOfDay(date), date.getTimezoneOffset() * 60 * 1000);
  const weekStartDate = startOfWeek(todayStartDate, { weekStartsOn: 2 });

  return [...Array.from({ length: 7 })].map((_, _index) => addDays(weekStartDate, _index));
};
