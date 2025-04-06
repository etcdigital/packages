import { describe, expect, it } from 'vitest';
import { dateMask } from './';

describe('Date Mask Validator', () => {
  it.concurrent('Should return number with mask', () => {
    expect(dateMask('16102016')).toBe('16/10/2016');
  });

  it.concurrent('Should return number with mask with 2 numbers', () => {
    expect(dateMask('16')).toBe('16');
  });

  it.concurrent('Should return number with mask with 3 numbers', () => {
    expect(dateMask('161')).toBe('16/1');
  });

  it.concurrent('Should return number with mask with 5 numbers', () => {
    expect(dateMask('16121')).toBe('16/12/1');
  });
});
