import { describe, expect, it } from 'vitest';
import { isEmail } from './';

describe('packages/is/email', () => {
  it.concurrent('Invalid', () => {
    expect(isEmail('mega@zord')).toBe(false);
    expect(isEmail('valid')).toBe(false);
    expect(isEmail('test@.com')).toBe(false);
    expect(isEmail('test.com')).toBe(false);
  });
  it.concurrent('Valid', () => {
    expect(isEmail('mega@zord.com')).toBe(true);
    expect(isEmail('mega@zord.tech')).toBe(true);
    expect(isEmail('test@test.com')).toBe(true);
    expect(isEmail('test@sub.test.com')).toBe(true);
  });
});
