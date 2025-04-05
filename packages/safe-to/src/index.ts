export const toStr = (value: unknown): string => (value || '').toString();

export const toInt = (value: unknown): number => {
  const v = Number.parseInt(toStr(value), 10);
  return Number.isNaN(v) ? 0 : v;
};

export const toFloat = (value: unknown, decimals?: number): number | string => {
  const v = Number.parseFloat(toStr(value));
  if (decimals) {
    return v.toFixed(decimals);
  }
  return v;
};

export const brToFloat = (value: unknown): number => {
  const v = toStr(value).replace('.', '').replace(',', '.');

  return Number.parseFloat(v);
};
