import { capitalize, isString } from '@utils';

const parseSurnames = (surnames: string[]) =>
  surnames.map((_surname) => `${capitalize(_surname[0])}.`).join(' ');

export const getLastNameInitials = (value: string) => {
  if (!isString(value)) {
    return '';
  }

  const parsedValue = value.replace(/\s\s+/g, ' ');
  const chunks = parsedValue.split(' ');

  if (chunks.length <= 1) {
    return parsedValue;
  }

  const [name, ...surnames] = chunks;

  return `${capitalize(name)} ${parseSurnames(surnames)}`;
};
