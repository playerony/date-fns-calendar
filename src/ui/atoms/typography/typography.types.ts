import { ReactNode } from 'react';

export interface ITypographyProps {
  id?: string;
  color?:
    | 'none'
    | 'info'
    | 'black'
    | 'error'
    | 'white'
    | 'default'
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'success'
    | 'warning'
    | 'secondary';
  width?: number;
  htmlFor?: string;
  strong?: boolean;
  italic?: boolean;
  minWidth?: number;
  maxWidth?: number;
  pointer?: boolean;
  className?: string;
  disabled?: boolean;
  ellipsis?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  display?: 'unset' | 'block' | 'inline-block';
  fontSize?: 'default' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'span';
}
