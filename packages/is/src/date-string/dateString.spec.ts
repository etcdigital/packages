import { describe, expect, it } from 'vitest';
import { isDateString } from './';

describe('packages/is/DateString', () => {
  it.concurrent('Invalid', () => {
    expect(isDateString('2019-21-16')).toBe(false);
    expect(isDateString('2019-12-32')).toBe(false);
    expect(isDateString('1900-01-01')).toBe(false); // mininum date is 1901 by default
    expect(isDateString('1899-12-31')).toBe(false);
  });
  it.concurrent('Valid', () => {
    expect(isDateString('1899-12-31', 1800)).toBe(true); // disable minimum date
    expect(isDateString('2019-01-16')).toBe(true);
    expect(isDateString('1933-11-12')).toBe(true);
  });
});
