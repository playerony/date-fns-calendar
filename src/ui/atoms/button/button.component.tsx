import classnames from 'classnames';
import { ForwardedRef, forwardRef, memo } from 'react';

import './button.styles.scss';
import { IButtonProps } from './button.types';

const ButtonComponent = (
  {
    borderRadius = 'md',
    children,
    className,
    color = 'primary',
    size = 'medium',
    variant = 'contained',
    ...restProps
  }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
): JSX.Element => (
  <button
    ref={ref}
    className={classnames(
      'button-wrapper',
      `button-wrapper--size-${size}`,
      `button-wrapper--color-${color}`,
      `button-wrapper--variant-${variant}`,
      `button-wrapper--border-radius-${borderRadius}`,
      className,
    )}
    {...restProps}
  >
    {children}
  </button>
);

export const Button = memo(forwardRef(ButtonComponent));
