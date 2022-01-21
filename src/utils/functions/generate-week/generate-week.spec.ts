import { functionImportTest } from '@utils';
import { generateWeek } from './generate-week.function';

describe('generateWeek function', () => {
  functionImportTest(generateWeek);

  it('should return empty array when passed date is not type of date', () => {
    // @ts-expect-error
    expect(generateWeek(1)).toEqual([]);
    // @ts-expect-error
    expect(generateWeek('213')).toEqual([]);
    // @ts-expect-error
    expect(generateWeek('20-11-2019')).toEqual([]);
    // @ts-expect-error
    expect(generateWeek([])).toEqual([]);
  });

  it('should return an array of 7 days of provided day`s week', () => {
    expect(generateWeek(new Date(2021, 10, 10))).toEqual([
      new Date('2021-11-08T23:00:00.000Z'),
      new Date('2021-11-09T23:00:00.000Z'),
      new Date('2021-11-10T23:00:00.000Z'),
      new Date('2021-11-11T23:00:00.000Z'),
      new Date('2021-11-12T23:00:00.000Z'),
      new Date('2021-11-13T23:00:00.000Z'),
      new Date('2021-11-14T23:00:00.000Z'),
    ]);
  });
});
