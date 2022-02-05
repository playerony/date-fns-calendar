import { useEffect, useState } from 'react';

import { getWindowSize, useEventListener } from '@utils';

import { MOBILE_SCREEN_BREAKPOINT, SMALL_SCREEN_BREAKPOINT } from '@infrastructure/constants';

import { IDeviceDetectData } from './use-device-detect-types';

const getDeviceData = () => {
  const { width } = getWindowSize();

  const isDesktop = width > SMALL_SCREEN_BREAKPOINT;
  const isMobile = width < MOBILE_SCREEN_BREAKPOINT;
  const isTablet = width >= MOBILE_SCREEN_BREAKPOINT && width <= SMALL_SCREEN_BREAKPOINT;

  return { isMobile, isTablet, isDesktop };
};

export const useDeviceDetect = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize);
  const [deviceData, setDeviceData] = useState<IDeviceDetectData>(getDeviceData);

  const handleResize = () => setWindowSize(getWindowSize());

  useEventListener('resize', handleResize);

  useEffect(() => {
    setDeviceData(getDeviceData());
  }, [windowSize.width]);

  return { deviceData, windowSize };
};
