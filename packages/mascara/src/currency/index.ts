import { currencySeparatorMask } from '@etcdigital/dinheiro';
import { toStr } from '@etcdigital/safe-to';

const commaRegex = /,/g;
export const currencyMask = (
  value: string | number,
  fromUS = false,
): string => {
  const withoutDots = fromUS
    ? toStr(value).replace(commaRegex, '')
    : toStr(value).replace(/\./g, '');
  const withReplaceComma = withoutDots.replace(commaRegex, '.');
  const floatNumber = Number.parseFloat(withReplaceComma).toFixed(2);
  const [coin, cents] = floatNumber.split('.');

  const isNegative = coin.substring(0, 1) === '-';
  const coinToSplit = isNegative ? coin.substring(1) : coin;

  return `${isNegative ? '-' : ''}${currencySeparatorMask(
    coinToSplit,
    '.',
  )},${cents}`;
};
