import { describe, expect, it } from 'vitest';
import { currencyMask } from './';

describe('mask/currency', () => {
  it.concurrent('Should format with unit only', () => {
    expect(currencyMask('0')).toBe('0,00');
  });

  it.concurrent('Should format cents only', () => {
    expect(currencyMask(',00')).toBe('0,00');
  });

  it.concurrent('Should format value with cents', () => {
    expect(currencyMask('12,00')).toBe('12,00');
  });

  it.concurrent('Should format value 4 chars size', () => {
    expect(currencyMask('12220,04')).toBe('12.220,04');
  });

  it.concurrent('Should format value 6 chars size', () => {
    expect(currencyMask('212220,04')).toBe('212.220,04');
  });

  it.concurrent('Should format value 8 chars size', () => {
    expect(currencyMask('22212220,04')).toBe('22.212.220,04');
  });

  it.concurrent('Should format value 8 chars size from US format', () => {
    expect(currencyMask('22212220.04', true)).toBe('22.212.220,04');
  });

  it.concurrent('Should format remove - in 3 digit before comma', () => {
    expect(currencyMask('567.00', true)).toBe('567,00');
    expect(currencyMask('-567.00', true)).toBe('-567,00');
  });
});
