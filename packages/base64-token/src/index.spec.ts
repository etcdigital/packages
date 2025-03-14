import { describe, expect, it } from 'vitest';
import { generateB64Token, translateFromB64Token } from './';

describe('base64-token', () => {
  it('As Json string', () => {
    const origin = JSON.stringify({ a: 1, b: 2 });
    const token = generateB64Token(origin);
    expect(translateFromB64Token(token)).toBe(origin);
  });
  it('As string token', () => {
    const origin = 'asda-sd-as-d-as-d-as';
    const token = generateB64Token(origin);
    expect(token).toBe('WVhOa1lTMXpaQzFoY3kxa0xXRnpMV1F0WVhNPQ==');
    expect(translateFromB64Token(token)).toBe(origin);
  });
});
