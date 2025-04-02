import { addYears, format } from 'date-fns';
import { describe, expect, it } from 'vitest';
import { isBirthValid } from './';

describe('isBirthValid Validator', () => {
  it.concurrent('Should return false', () => {
    expect(JSON.stringify(isBirthValid('20290100'))).toBe(
      `{"valid":false,"reason":"past"}`,
    );
    expect(JSON.stringify(isBirthValid('2029/01/00'))).toBe(
      `{"valid":false,"reason":"past"}`,
    );
    expect(JSON.stringify(isBirthValid('1992/13/12'))).toBe(
      `{"valid":false,"reason":"past"}`,
    );
  });

  it.concurrent('Should return true', () => {
    expect(JSON.stringify(isBirthValid('2020/01/04'))).toBe(
      `{"valid":true,"reason":""}`,
    );
    expect(JSON.stringify(isBirthValid('1950/10/23'))).toBe(
      `{"valid":true,"reason":""}`,
    );
    expect(JSON.stringify(isBirthValid('1901/10/12'))).toBe(
      `{"valid":true,"reason":""}`,
    );
  });

  const dt = format(addYears(new Date(), 1), 'yyyy-MM-dd');

  it.concurrent(`Should return false on ${dt}`, () => {
    expect(JSON.stringify(isBirthValid(dt))).toBe(
      `{"valid":false,"reason":"future"}`,
    );
  });
});
