export const is = (value: any): boolean =>
  !!value && value.constructor === Object;
