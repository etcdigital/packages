import { describe, expect, it } from 'vitest';
import { cnpjMask } from './';

describe('CNPJ Mask Validator', () => {
  it.concurrent('Should return number with mask', () => {
    expect(cnpjMask('22235063000160')).toBe('22.235.063/0001-60');
  });

  it.concurrent('Should return number with mask with 3 numbers', () => {
    expect(cnpjMask('222')).toBe('22.2');
  });

  it.concurrent('Should return number with mask with 7 numbers', () => {
    expect(cnpjMask('2223506')).toBe('22.235.06');
  });

  it.concurrent('Should return number with mask with 10 numbers', () => {
    expect(cnpjMask('22235063000')).toBe('22.235.063/000');
  });
  it.concurrent('Should return number with mask with 10 numbers', () => {
    expect(cnpjMask(null as any)).toBe('');
  });
});
