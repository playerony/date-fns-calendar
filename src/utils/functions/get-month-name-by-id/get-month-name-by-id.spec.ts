import { functionImportTest } from '@utils';

import { getMonthNameById } from './get-month-name-by-id.function';

describe('getMonthNameById function', () => {
  functionImportTest(getMonthNameById);
});
