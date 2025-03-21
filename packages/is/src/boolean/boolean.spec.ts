import { describe, expect, it } from 'vitest';
import { isBoolean } from './';

describe('packages/is/boolean', () => {
  it.concurrent('Invalid', () => {
    expect(isBoolean(0)).toBe(false);
  });
  it.concurrent('Valid', () => {
    expect(isBoolean(true)).toBe(true);
  });
});
