import classnames from 'classnames';
import { ForwardedRef, forwardRef, memo } from 'react';

import './paper.styles.scss';
import { IPaperProps } from './paper.types';

const PaperComponent = (
  {
    borderRadius = 'sm',
    children,
    className,
    padding = 'sm',
    shadow = 'sm',
    ...restProps
  }: IPaperProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => (
  <div
    ref={ref}
    className={classnames(
      'paper-wrapper',
      `paper-wrapper--shadow-${shadow}`,
      `paper-wrapper--padding-${padding}`,
      `paper-wrapper--border-radius-${borderRadius}`,
      className,
    )}
    {...restProps}
  >
    {children}
  </div>
);

export const Paper = memo(forwardRef(PaperComponent));
