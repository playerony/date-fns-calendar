import { getWindowHeight, functionImportTest } from '@utils';

describe('getWindowHeight function', () => {
  functionImportTest(getWindowHeight);

  it('should return window width', () => {
    expect(getWindowHeight()).toEqual(768);
  });
});
