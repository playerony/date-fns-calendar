import { addDays } from 'date-fns';

import { functionImportTest } from '@utils';

import { generateDatesArray } from './generate-dates-array.function';

describe('generateDatesArray function', () => {
  functionImportTest(generateDatesArray);

  it('should generate array of 10 dates', () => {
    expect(generateDatesArray(addDays(new Date(), 10), new Date())).toHaveLength(10);
  });
});
