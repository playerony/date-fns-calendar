import classnames from 'classnames';
import { memo, forwardRef, ForwardedRef } from 'react';

import { IButtonProps } from './button.types';

import './button.styles.scss';

const ButtonComponent = (
  {
    children,
    className,
    size = 'medium',
    color = 'primary',
    borderRadius = 'md',
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
