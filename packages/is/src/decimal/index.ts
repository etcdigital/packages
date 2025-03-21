// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isDecimal = (value: any): boolean => {
  if (typeof value === 'number') return true;

  if (typeof value === 'string') {
    const number2Check = parseInt(value, 10);
    if (!number2Check && number2Check !== 0) {
      return false;
    }
  }
  return (value || '').toString().indexOf('.') > -1;
};
