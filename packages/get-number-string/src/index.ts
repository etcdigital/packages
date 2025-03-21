export const getNumbersStr = (value: string): string =>
  (value || '').toString().replace(/\D/g, '');

export const getNumbers = (value: string): number =>
  Number.parseInt(getNumbersStr(value), 10);
