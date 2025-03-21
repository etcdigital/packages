export const isArray = (value: any): boolean => {
  if (!value) {
    return false;
  }
  return !!value && value.constructor === Array;
};
