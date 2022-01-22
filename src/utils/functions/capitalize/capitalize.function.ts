import { isString } from '@utils';

export const capitalize = (value: string) => {
  if (!isString(value)) {
    return '';
  }

  const parsedValue = value.trim();
  const firstLetter = parsedValue[0];
  const restString = parsedValue.slice(1);

  return `${firstLetter.toUpperCase()}${restString}`;
};
