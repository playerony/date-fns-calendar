import { addDays, startOfDay, startOfWeek } from 'date-fns';

import { isDate } from '@utils';

export const generateWeek = (date: Date = new Date()) => {
  if (!isDate(date)) {
    return [];
  }

  const todayStartDate = startOfDay(date);
  const weekStartDate = startOfWeek(todayStartDate);

  return [...Array(7)].map((_, _index) => addDays(weekStartDate, _index));
};
