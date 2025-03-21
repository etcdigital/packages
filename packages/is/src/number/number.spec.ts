import { describe, expect, it } from 'vitest';
import { isNumber } from './';

describe('packages/is/number', () => {
  it.concurrent('Invalid', () => {
    expect(isNumber('2019-21=16')).toBe(false);
    expect(isNumber('')).toBe(NaN);
  });
  it.concurrent('Valid', () => {
    expect(isNumber('19239012')).toBe(true);
  });
});
