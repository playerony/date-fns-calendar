import { ReactNode, HTMLAttributes } from 'react';

type TSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface IPaperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  padding?: TSize;
  className?: string;
  borderRadius?: TSize;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}
