import classnames from 'classnames';

import { IDividerProps } from './divider.types';

import './divider.styles.scss';

export const Divider = ({ className, orientation = 'horizontal' }: IDividerProps): JSX.Element => (
  <div
    className={classnames(
      'divider-wrapper',
      `divider-wrapper--orientation-${orientation}`,
      className,
    )}
  />
);
