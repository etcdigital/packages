// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isObject = (value: any): boolean => {
  if (!value) {
    return false;
  }
  return typeof value === 'object';
};
