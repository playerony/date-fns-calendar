import { generateMonth, functionImportTest } from '@utils';

describe('generateMonth function', () => {
  functionImportTest(generateMonth);

  it('should return empty array when passed date is not type of date', () => {
    // @ts-expect-error
    expect(generateMonth(1)).toEqual([]);
    // @ts-expect-error
    expect(generateMonth('213')).toEqual([]);
    // @ts-expect-error
    expect(generateMonth('20-11-2019')).toEqual([]);
    // @ts-expect-error
    expect(generateMonth([])).toEqual([]);
  });

  it('should generate full month of dates', () => {
    const result = generateMonth(new Date(2021, 9, 10));

    expect(result).toHaveLength(6);
    expect(result[0]).toHaveLength(7);
    expect(result[1]).toHaveLength(7);
    expect(result[2]).toHaveLength(7);
    expect(result[3]).toHaveLength(7);
    expect(result[4]).toHaveLength(7);
    expect(result[5]).toHaveLength(7);
  });
});
