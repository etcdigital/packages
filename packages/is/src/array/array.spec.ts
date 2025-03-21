import { describe, expect, it } from 'vitest';
import { isArray } from './';

describe('packages/is/isArray', () => {
  it.concurrent('Invalid', () => {
    expect(isArray(0)).toBe(false);
    expect(isArray({})).toBe(false);
  });
  it.concurrent('Valid', () => {
    expect(isArray([])).toBe(true);
  });
});
