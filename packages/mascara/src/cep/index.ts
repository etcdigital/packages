export const cepMask = (value: string): string =>
  value.replace(/[^\d]/g, '').replace(/^([\d]{5})-*([\d]{3})/, '$1-$2');
