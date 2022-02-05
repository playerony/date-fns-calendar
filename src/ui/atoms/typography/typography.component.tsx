import classnames from 'classnames';
import { ForwardedRef, forwardRef, memo } from 'react';

import { ITypographyProps } from './typography.types';

import './typography.styles.scss';

const TypographyComponent = (
  {
    as = 'h5',
    children,
    className,
    color = 'black',
    disabled,
    display = 'unset',
    ellipsis,
    fontSize = 'default',
    italic,
    maxWidth,
    minWidth,
    pointer,
    strong,
    width,
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
      style={{ width, maxWidth, minWidth }}
    >
      {children}
    </Component>
  );
};

export const Typography = memo(forwardRef(TypographyComponent));
