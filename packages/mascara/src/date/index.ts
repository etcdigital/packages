import { toStr } from '@etcdigital/safe-to';

export const dateMask = (value: string): string => {
  return toStr(value)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2');
};
