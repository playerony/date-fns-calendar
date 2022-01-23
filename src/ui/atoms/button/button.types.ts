import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  borderRadius?: 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'error';
}
