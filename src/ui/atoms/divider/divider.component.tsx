import { memo } from 'react';
import classnames from 'classnames';

import { IDividerProps } from './divider.types';

import './divider.styles.scss';

const DividerComponent = ({
  className,
  orientation = 'horizontal',
}: IDividerProps): JSX.Element => (
  <div
    className={classnames(
      'divider-wrapper',
      `divider-wrapper--orientation-${orientation}`,
      className,
    )}
  />
);

export const Divider = memo(DividerComponent);
