// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isNumber = (value: any) => {
  const newValue = (value || '').toString().replace(/\D/g, '');
  return parseInt(value, 10) && newValue === value.toString();
};
