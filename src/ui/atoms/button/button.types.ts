import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'contained';
}
