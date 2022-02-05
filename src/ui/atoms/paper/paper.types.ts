import { HTMLAttributes, ReactNode } from 'react';

type TSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface IPaperProps extends HTMLAttributes<HTMLDivElement> {
  borderRadius?: TSize;
  children: ReactNode;
  className?: string;
  padding?: TSize;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}
