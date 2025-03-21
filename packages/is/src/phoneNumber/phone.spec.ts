import { describe, expect, it } from 'vitest';
import { isPhoneNumber } from './';

describe('packages/is/phone', () => {
  it.concurrent('Invalid', () => {
    expect(isPhoneNumber('46944443')).toBe(false);
    expect(isPhoneNumber('123123121232')).toBe(true);
    expect(isPhoneNumber('')).toBe(false);
    expect(isPhoneNumber({})).toBe(false);
  });
  it.concurrent('Valid', () => {
    expect(isPhoneNumber('4644443333')).toBe(true);
    expect(isPhoneNumber('46944443333')).toBe(true);
    expect(isPhoneNumber('46988043494')).toBe(true);
    expect(isPhoneNumber('12345678907')).toBe(true);
    expect(isPhoneNumber('(12) 34567-8909')).toBe(true);
  });
});
