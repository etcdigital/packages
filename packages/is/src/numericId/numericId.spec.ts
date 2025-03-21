import { describe, expect, it } from 'vitest';
import { isNumericID } from './';

describe('isNumericID Validator', () => {
  it.concurrent('Should return false', () => {
    expect(isNumericID('20192s0218316222')).toBe(false);
    expect(isNumericID('03668s439385333')).toBe(false);
    expect(isNumericID('00001s00000000')).toBe(false);
    expect(isNumericID('000a00000000000')).toBe(false);
    expect(isNumericID('03')).toBe(false);
    expect((isNumericID as any)()).toBe(false);
  });
  it.concurrent('Should return true', () => {
    expect(isNumericID('2')).toBe(true);
    expect(isNumericID('103')).toBe(true);
    expect(isNumericID('4403')).toBe(true);
    expect(isNumericID('2')).toBe(true);
    expect(isNumericID(1312312)).toBe(true);
  });
});
