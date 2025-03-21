import { describe, expect, it } from 'vitest';
import { isCNPJ } from './';

describe('CNPJ Validator', () => {
  it.concurrent('Should return false', () => {
    expect(isCNPJ('20190218316222')).toBe(false);
    expect(isCNPJ('03668439385333')).toBe(false);
    expect(isCNPJ('000000000000')).toBe(false);
    expect(isCNPJ('00000000000000')).toBe(false);
  });
  it.concurrent('Should return true', () => {
    expect(isCNPJ('26329429000110')).toBe(true);
    expect(isCNPJ('03893966000193')).toBe(true);
  });
});
