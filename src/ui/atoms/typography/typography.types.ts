import { ReactNode } from 'react';

export interface ITypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'span';
  children?: ReactNode;
  className?: string;
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
  disabled?: boolean;
  display?: 'unset' | 'block' | 'inline-block';
  ellipsis?: boolean;
  fontSize?: 'default' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  htmlFor?: string;
  id?: string;
  italic?: boolean;
  maxWidth?: number;
  minWidth?: number;
  onClick?: () => void;
  pointer?: boolean;
  strong?: boolean;
  width?: number;
}
