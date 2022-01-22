import { addDays, startOfDay, startOfWeek } from 'date-fns';

import { isDate, generateDatesArray } from '@utils';

export const generateWeek = (date: Date = new Date()) => {
  if (!isDate(date)) {
    return [];
  }

  const todayStartDate = startOfDay(date);
  const weekStartDate = startOfWeek(todayStartDate, { weekStartsOn: 1 });

  return generateDatesArray(weekStartDate, addDays(weekStartDate, 7));
};
