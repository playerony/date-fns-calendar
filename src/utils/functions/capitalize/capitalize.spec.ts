import { capitalize, functionImportTest } from '@utils';

describe('capitalize function', () => {
  functionImportTest(capitalize);

  it('should return empty string when provided parameter is not a string value', () => {
    // @ts-expect-error
    expect(capitalize()).toEqual('');
    // @ts-expect-error
    expect(capitalize({})).toEqual('');
    // @ts-expect-error
    expect(capitalize(null)).toEqual('');
    // @ts-expect-error
    expect(capitalize(-500)).toEqual('');
    // @ts-expect-error
    expect(capitalize([1, 2, 3])).toEqual('');
    // @ts-expect-error
    expect(capitalize(new Date())).toEqual('');
  });

  it('should capitalize first letter', () => {
    expect(capitalize('a')).toEqual('A');
    expect(capitalize('     example')).toEqual('Example');
  });
});
