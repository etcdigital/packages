/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const is = (value: any): boolean =>
  !!value && value.constructor === Object;

const preventInvalidObject = (value: any) => (is(value) ? value : {});

class getByObject {
  protected obj: any;
  constructor(value: any) {
    this.obj = preventInvalidObject(value);
  }

  only(values: string[]) {
    const newObj: any = {};
    for (const key of values) {
      if (this.obj[key] || this.obj[key] === false) {
        newObj[key] = this.obj[key];
      }
    }

    return newObj;
  }
}

export const getBy = (value: any) => new getByObject(value);

export const clean = (obj: any, excludeEmpty = false): any => {
  const shadow = { ...obj };
  const keys = Object.keys(shadow);

  for (const key of keys) {
    if (shadow[key] === null || shadow[key] === undefined) {
      delete shadow[key];
    }
    if (excludeEmpty && shadow[key] === '') {
      delete shadow[key];
    }
  }
  return shadow;
};
