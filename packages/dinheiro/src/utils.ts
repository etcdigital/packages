import { toStr } from '@etcdigital/safe-to';

const completeDecimalOf = (value: string, separator: string): string => {
  const [_integer, _decimal] = value.split('-');
  return `${_integer}${separator}${(_decimal || '').padEnd(2, '0')}`;
};

export const transformBRL2USDFormat = (value: string): string => {
  const newValue = toStr(value).split('.').join('').split(',').join('-');
  return completeDecimalOf(newValue, '.');
};

export const transformUSD2BRLFormat = (value: string | number): string => {
  const newValue = toStr(value).split(',').join('').split('.').join('-');
  return completeDecimalOf(newValue, ',');
};

export const currencySeparatorMask = (
  value: string,
  separator: string,
): string => {
  const skipLength = value.length % 3;

  let oldValue = value.substring(skipLength, skipLength + value.length);
  let newValue = value.substring(0, skipLength);

  while (oldValue !== '') {
    if (newValue) {
      newValue += separator;
    }
    newValue += oldValue.substring(0, 3);

    oldValue = oldValue.substring(3, 3 + oldValue.length);
  }

  return newValue;
};
