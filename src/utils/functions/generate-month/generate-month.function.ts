import { addWeeks, endOfWeek, endOfMonth, startOfDay, startOfMonth } from 'date-fns';

import { isDate, generateWeek } from '@utils';

function lastDayOfRange(range: Date[][]) {
  return range[range.length - 1][6];
}

export const generateMonth = (date: Date = new Date()) => {
  if (!isDate(date)) {
    return [];
  }

  const result = [];
  let startDate = startOfMonth(date);
  const monthLastDate = startOfDay(endOfWeek(endOfMonth(date)));

  result.push(generateWeek(startDate));

  while (lastDayOfRange(result) < monthLastDate) {
    startDate = addWeeks(startDate, 1);

    result.push(generateWeek(startDate));
  }

  return result;
};
