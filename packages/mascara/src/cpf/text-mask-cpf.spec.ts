import { describe, expect, it } from 'vitest';
import { cpfMask } from './';

describe('CPF Mask Validator', () => {
  it.concurrent('Should return number with mask', () => {
    expect(cpfMask('18487644058')).toBe('184.876.440-58');
  });

  it.concurrent('Should return number with mask with 3 numbers', () => {
    expect(cpfMask('184')).toBe('184');
  });

  it.concurrent('Should return number with mask with 4 numbers', () => {
    expect(cpfMask('1848')).toBe('184.8');
  });

  it.concurrent('Should return number with mask with 8 numbers', () => {
    expect(cpfMask('18487644')).toBe('184.876.44');
  });
});
