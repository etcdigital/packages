import { getNumbersStr } from '@etcdigital/get-number-from-string';
import { isNumber } from '../number';

export const isPhoneNumber = (value: any): boolean => {
  if (!value) {
    return false;
  }

  const phonenumber = getNumbersStr(value);

  if (
    !isNumber(phonenumber) ||
    phonenumber.length < 10 ||
    phonenumber.length > 12 /* 11, but exterior is a digit more */
  ) {
    return false;
  }

  return true;
};
