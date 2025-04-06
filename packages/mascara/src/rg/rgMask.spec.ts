import { describe, expect, it } from 'vitest';
import { rgMask } from './';

describe('rgMask', () => {
  it.concurrent('should return the RG with dots and hiffens', () => {
    expect(rgMask('290771602')).toBe('29.077.160-2');
  });
});
