import { describe, expect, it } from 'vitest';
import { phoneMask } from './';

describe('Phone Mask Validator', () => {
  it.concurrent('Should return number with mask', () => {
    expect(phoneMask('46999998888')).toBe('(46) 99999-8888');
  });

  it.concurrent('Should return number with mask with 3 numbers', () => {
    expect(phoneMask('469')).toBe('(46) 9');
  });

  it.concurrent('Should return number with mask with 6 numbers', () => {
    expect(phoneMask('469998')).toBe('(46) 9998');
  });

  it.concurrent('Should return number with mask with 7 numbers', () => {
    expect(phoneMask('46999854')).toBe('(46) 99985-4');
  });

  it.concurrent('Should format number starting with +55', () => {
    expect(phoneMask('+5511999988888')).toBe('+55 11 99998 8888');
  });

  it.concurrent('Should format number starting with +54', () => {
    expect(phoneMask('+5411999988888')).toBe('+5411999988888');
  });

  it.concurrent('Should format number starting with +595', () => {
    expect(phoneMask('+5951199998888')).toBe('+5951199998888');
  });

  it.concurrent('Should return number with mask with other prefix', () => {
    expect(phoneMask('+341199998888')).toBe('+341199998888');
  });
});
