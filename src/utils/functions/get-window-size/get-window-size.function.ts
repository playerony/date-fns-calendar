import { getWindowWidth, getWindowHeight } from '@utils';

export const getWindowSize = () => ({
  width: getWindowWidth(),
  height: getWindowHeight(),
});
