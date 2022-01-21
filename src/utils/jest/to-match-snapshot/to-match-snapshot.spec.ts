import { toMatchSnapshot, functionImportTest } from '../..';

describe('toMatchSnapshot function', () => {
  functionImportTest(toMatchSnapshot);

  toMatchSnapshot(() => 'test');
});
