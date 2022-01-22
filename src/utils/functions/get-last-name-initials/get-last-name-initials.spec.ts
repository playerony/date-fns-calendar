import { functionImportTest, getLastNameInitials } from '@utils';

describe('getLastNameInitials function', () => {
  functionImportTest(getLastNameInitials);

  it('should return empty string if passed value is not a string value', () => {
    // @ts-expect-error
    expect(getLastNameInitials(null)).toEqual('');
    // @ts-expect-error
    expect(getLastNameInitials(undefined)).toEqual('');
    // @ts-expect-error
    expect(getLastNameInitials(5)).toEqual('');
    // @ts-expect-error
    expect(getLastNameInitials([])).toEqual('');
    // @ts-expect-error
    expect(getLastNameInitials(() => {})).toEqual('');
  });

  it('should return passed string when value cannot be splitted', () => {
    expect(getLastNameInitials('test')).toEqual('test');
    expect(getLastNameInitials('dupa')).toEqual('dupa');
  });

  it('should handle multiple spaces and special characters', () => {
    expect(getLastNameInitials('test   test      test        Kocyk')).toEqual('Test T. T. K.');
  });

  it('should pass and return name with initials for each surnames', () => {
    expect(getLastNameInitials('test test test Kocyk')).toEqual('Test T. T. K.');
    expect(getLastNameInitials('test 938945 5#$#$%@#%$@#$%t &%^^%#%')).toEqual('Test 9. 5. &.');
  });
});
