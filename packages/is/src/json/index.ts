// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isJson = (obj: any): boolean => {
  try {
    if (typeof obj === 'string') {
      JSON.parse(obj);
      return true;
    }
    if (typeof obj === 'object') {
      JSON.stringify(obj);
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};
