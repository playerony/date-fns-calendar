import { functionImportTest } from '@utils';

import { isDate } from './is-date.function';

describe('isDate function', () => {
  functionImportTest(isDate);

  it('should return false when provided parameter is not a date', () => {
    // @ts-expect-error
    expect(isDate()).toBeFalsy();
    expect(isDate({})).toBeFalsy();
    expect(isDate(null)).toBeFalsy();
    expect(isDate('A123')).toBeFalsy();
    expect(isDate(() => {})).toBeFalsy();
    expect(isDate([1, 2, 3])).toBeFalsy();
    expect(isDate(jest.fn())).toBeFalsy();
  });

  it('should return true when provided parameter is a date', () => {
    expect(isDate(new Date())).toBeTruthy();
    expect(isDate(new Date('29-11-2021'))).toBeTruthy();
  });
});
