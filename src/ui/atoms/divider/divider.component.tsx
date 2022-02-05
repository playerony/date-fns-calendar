import classnames from 'classnames';
import { memo } from 'react';

import './divider.styles.scss';
import { IDividerProps } from './divider.types';

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
