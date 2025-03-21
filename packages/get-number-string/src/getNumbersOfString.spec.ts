import { describe, expect, it } from 'vitest';
import { getNumbers, getNumbersStr } from './';

describe('getNumbers', () => {
  it.concurrent('Should return empty string', () => {
    expect(getNumbers('asjlkdjkasjlk')).toBe(NaN);
  });
  it.concurrent('Should return 2 in string format', () => {
    expect(getNumbers('2asjlkdjk-asjlk')).toBe(2);
  });
  it.concurrent('Should return 9890 in string format', () => {
    expect(getNumbers('09s8d90as')).toBe(9890);
  });
  it.concurrent('Should return 9892 in string format', () => {
    expect(getNumbers('09s8d_90as2')).toBe(98902);
  });
  it.concurrent('Should return 9876 in string format', () => {
    expect(getNumbers('09asd8gf76')).toBe(9876);
  });
  it.concurrent('Should return 09876 in string format', () => {
    expect(getNumbers('09a_sd8-gf76')).toBe(9876);
  });
});

describe('Keep Only Numbers on string', () => {
  it.concurrent('Should return empty string', () => {
    expect(getNumbersStr('asjlkdjkasjlk')).toBe('');
  });
  it.concurrent('Should return 2 in string format', () => {
    expect(getNumbersStr('2asjlkdjk-asjlk')).toBe('2');
  });
  it.concurrent('Should return 09890 in string format', () => {
    expect(getNumbersStr('09s8d90as')).toBe('09890');
  });
  it.concurrent('Should return 09890 in string format', () => {
    expect(getNumbersStr('09s8d_90as')).toBe('09890');
  });
  it.concurrent('Should return 09876 in string format', () => {
    expect(getNumbersStr('09asd8gf76')).toBe('09876');
  });
  it.concurrent('Should return 09876 in string format', () => {
    expect(getNumbersStr('09a_sd8-gf76')).toBe('09876');
  });
  it.concurrent('Should return non-valid string', () => {
    expect(getNumbersStr('')).toBe('');
  });
});
