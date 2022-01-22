import { addDays, differenceInDays } from 'date-fns';

import { isDate } from '@utils';

export const generateDatesArray = (start: Date, end: Date) => {
  if (!isDate(start) || !isDate(end)) {
    return [];
  }

  const startDate = start <= end ? start : end;
  const difference = Math.abs(differenceInDays(start, end));

  return [...Array.from({ length: difference })].map((_, _index) => addDays(startDate, _index));
};
