import classnames from 'classnames';
import { memo, forwardRef, ForwardedRef } from 'react';

import { ITypographyProps } from './typography.types';

import './typography.styles.scss';

const TypographyComponent = (
  {
    width,
    strong,
    italic,
    pointer,
    children,
    disabled,
    ellipsis,
    maxWidth,
    minWidth,
    className,
    as = 'h5',
    color = 'black',
    display = 'unset',
    fontSize = 'default',
    ...restProps
  }: ITypographyProps,
  ref: ForwardedRef<HTMLElement>,
): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = as as any;

  return (
    <Component
      {...restProps}
      ref={ref}
      style={{ width, maxWidth, minWidth }}
      className={classnames(
        'typography-wrapper',
        `typography-wrapper--variant-${as}`,
        `typography-wrapper--size-${fontSize}`,
        `typography-wrapper--display-${display}`,
        `typography-wrapper--color-${color}`,
        {
          'typography-wrapper--disabled': disabled,
          'typography-wrapper--strong': strong,
          'typography-wrapper--italic': italic,
          'typography-wrapper--pointer': pointer,
          'typography-wrapper--ellipsis': ellipsis,
        },
        className,
      )}
    >
      {children}
    </Component>
  );
};

export const Typography = memo(forwardRef(TypographyComponent));
