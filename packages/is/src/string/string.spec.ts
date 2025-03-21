import { describe, expect, it } from 'vitest';
import { isString } from './';

describe('packages/is/string', () => {
  it.concurrent('Invalid', () => {
    expect(isString(0)).toBe(false);
  });
  it.concurrent('Valid', () => {
    expect(isString('19239012')).toBe(true);
  });
});
