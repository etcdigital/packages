import { describe, expect, it } from 'vitest';
import { isDateValid } from './';

describe('isDateValid Validator', () => {
  it.concurrent('Should return false', () => {
    expect(isDateValid('20290100')).toBe(false);
    expect(isDateValid('2029/01/00')).toBe(false);
    expect(isDateValid('1992/13/12')).toBe(false);
    expect(isDateValid('1992/32/12')).toBe(false);
    expect(isDateValid('32/12/92')).toBe(false);
    expect(isDateValid('1992/00/12')).toBe(false);
  });
  it.concurrent('Should return true', () => {
    expect(isDateValid('2020/01/04')).toBe(true);
    expect(isDateValid('2121/12/12')).toBe(true);
    expect(isDateValid('1950/10/23')).toBe(true);
  });
  it.concurrent('Should return false with USDefault as true', () => {
    expect(isDateValid('32/12/92')).toBe(false);
    expect(isDateValid('00/12/1992')).toBe(false);
    expect(isDateValid('01/04/2020')).toBe(false);
    expect(isDateValid('12/12/2121')).toBe(false);
  });
  it.concurrent('Should return true with USDefault as true', () => {
    expect(isDateValid('2020/04/01')).toBe(true);
    expect(isDateValid('2121/12/12')).toBe(true);
  });
});
