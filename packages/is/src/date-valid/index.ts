import { getNumbersStr } from '@etcdigital/get-number-from-string';
import { isDateString } from '../date-string';

export const isDateValid = (dateStr: string): boolean => {
  if (!isDateString(dateStr)) {
    return false;
  }

  const dateNumbers: string = getNumbersStr(dateStr);
  const month = Number.parseInt(dateNumbers.substring(4, 6), 10);

  if (month < 1 || month > 12) {
    return false;
  }
  return true;
};
