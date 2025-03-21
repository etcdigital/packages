// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isString = (value: any): boolean => {
  if (!value) {
    return false;
  }
  return typeof value === 'string';
};
