import { describe, expect, it } from 'vitest';
import { clean, getBy } from './';

describe('getBy', () => {
  it.concurrent('Should return only b attribute', () => {
    expect(getBy({ a: true, b: false }).only(['b'])).toEqual({ b: false });
  });

  it.concurrent('Should return empty attributes', () => {
    expect(getBy({ a: true, b: false }).only(['c'])).toEqual({});
  });

  it.concurrent('Should return empty attributes on invalid object', () => {
    expect(getBy(true).only(['c'])).toEqual({});
    expect(getBy(undefined).only(['c'])).toEqual({});
  });
});

describe('clean', () => {
  it.concurrent('Should return clean object', () => {
    expect(
      JSON.stringify(
        clean({
          a: null,
          b: true,
          c: undefined,
        }),
      ),
    ).toBe(`{"b":true}`);
  });
});
