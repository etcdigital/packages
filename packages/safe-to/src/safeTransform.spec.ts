import { describe, expect, it } from 'vitest';
import { toFloat } from './';

describe('toFloat', () => {
  it.concurrent('should work', () => {
    expect(toFloat('80')).toBe(80.0);
    expect(toFloat('80', 2)).toBe('80.00');
  });
});
