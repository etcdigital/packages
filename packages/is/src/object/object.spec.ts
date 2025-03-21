import { describe, expect, it } from 'vitest';
import { isObject } from './';

describe('packages/is/object', () => {
  it.concurrent('Invalid', () => {
    expect(isObject(0)).toBe(false);
  });
  it.concurrent('Valid', () => {
    expect(isObject({})).toBe(true);
  });
});
