import { isNumber, capitalize } from '@utils';

import { EMonth } from '@enums';

const monthValues = Object.values(EMonth);
const defaultMonth = monthValues[0];

export const getMonthNameById = (monthId: number) => {
  if (!isNumber(monthId)) {
    return capitalize(defaultMonth);
  }

  return capitalize(monthValues[monthId] || defaultMonth);
};
