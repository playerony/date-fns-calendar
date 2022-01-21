import { isFunction } from '@utils';

export const isDate = (value: unknown): value is Date =>
  !!value && value instanceof Date && isFunction(value.getMonth);
