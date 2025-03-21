import { describe, expect, it } from 'vitest';
import { isJson } from './';

describe('packages/is/json', () => {
  it.concurrent('Should return false', () => {
    expect(isJson('{,}')).toBe(false);
    expect(isJson('')).toBe(false);
    expect(isJson('[q]')).toBe(false);
    expect(isJson('1899-12-31')).toBe(false);
    expect(isJson(1899)).toBe(false);
  });
  it.concurrent('Should return true', () => {
    expect(isJson('{"a": true}')).toBe(true);
    expect(isJson('{}')).toBe(true);
    expect(isJson('[]')).toBe(true);
    expect(isJson({})).toBe(true);
  });
});
