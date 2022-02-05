import { functionImportTest, generateWeek } from '@utils';

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
    expect(generateWeek(new Date(2021, 10, 10))).toHaveLength(7);
  });
});
