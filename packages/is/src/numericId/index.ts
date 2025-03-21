export const isNumericID = (value: number | string): boolean => {
  const strValue = (value || '').toString();
  const intValue = parseInt(strValue, 10);
  if (strValue === intValue.toString() && intValue > 0) {
    return true;
  }
  return false;
};
