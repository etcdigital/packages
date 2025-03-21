import { describe, expect, it } from 'vitest';
import { isDecimal } from './';

describe('Is Decimal Validator', () => {
  it.concurrent('Should return false', () => {
    expect(isDecimal('abc.com')).toBe(false);
  });
  it.concurrent('Should return true', () => {
    expect(isDecimal(2019)).toBe(true);
    expect(isDecimal(12.2)).toBe(true);
  });
});
