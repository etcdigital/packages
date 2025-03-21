import { describe, expect, it } from 'vitest';
import { isTime } from './';

describe('packages/is/time', () => {
  it.concurrent('Should return false', () => {
    expect(isTime('12:60')).toBe(false);
    expect(isTime('01:2')).toBe(false);
    expect(isTime('12322')).toBe(false);
    expect(isTime('34534')).toBe(false);
    expect(isTime('34:34')).toBe(false);
    expect(isTime('11:60')).toBe(false);
  });
  it.concurrent('Should return true', () => {
    expect(isTime('12:12')).toBe(true);
    expect(isTime('01:01')).toBe(true);
    expect(isTime('11:00')).toBe(true);
    expect(isTime('11:59')).toBe(true);
  });
});
