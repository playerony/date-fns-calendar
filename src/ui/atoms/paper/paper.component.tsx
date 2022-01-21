import classnames from 'classnames';
import { memo, forwardRef, ForwardedRef } from 'react';

import { IPaperProps } from './paper.types';

import './paper.styles.scss';

const PaperComponent = (
  {
    children,
    className,
    shadow = 'sm',
    padding = 'sm',
    borderRadius = 'sm',
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
