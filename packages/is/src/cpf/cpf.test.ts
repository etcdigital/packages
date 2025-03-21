import { describe, expect, it } from 'vitest';
import { isCPF } from './';

describe('packages/is/cpf', () => {
  it.concurrent('Should return false', () => {
    expect(isCPF('20190218316')).toBe(false);
    expect(isCPF('03668439385')).toBe(false);
    expect(isCPF('00000000')).toBe(false);
    expect(isCPF('00000000000')).toBe(false);
  });
  it.concurrent('Should return true', () => {
    expect(isCPF('66215263001')).toBe(true);
    expect(isCPF('66843938035')).toBe(true);
  });
});
