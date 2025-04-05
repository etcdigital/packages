import { describe, expect, it } from 'vitest';
import { isBirthValid } from './';

describe('isBirthValid - unit tests', () => {
  // Datas inválidas (malformadas ou não existentes)
  it.concurrent('Should return invalid for "20290100"', () => {
    expect(isBirthValid('20290100')).toEqual({ valid: false, reason: 'invalid' });
  });

  it.concurrent('Should return invalid for "2029/01/00"', () => {
    expect(isBirthValid('2029/01/00')).toEqual({ valid: false, reason: 'invalid' });
  });

  it.concurrent('Should return invalid for "1992/13/12"', () => {
    expect(isBirthValid('1992/13/12')).toEqual({ valid: false, reason: 'invalid' });
  });

  it.concurrent('Should return invalid for "abcd-ef-gh"', () => {
    expect(isBirthValid('abcd-ef-gh')).toEqual({ valid: false, reason: 'invalid' });
  });

  it.concurrent('Should return invalid for empty string', () => {
    expect(isBirthValid('')).toEqual({ valid: false, reason: 'invalid' });
  });

  it.concurrent('Should return invalid for "2000-02-30"', () => {
    expect(isBirthValid('2000-02-30')).toEqual({ valid: false, reason: 'invalid' });
  });

  it.concurrent('Should return invalid for "1900-01-01"', () => {
    expect(isBirthValid('1900-01-01')).toEqual({ valid: false, reason: 'invalid' });
  });

  it.concurrent('Should return invalid for "1800-05-20"', () => {
    expect(isBirthValid('1800-05-20')).toEqual({ valid: false, reason: 'invalid' });
  });

  it.concurrent('Should return invalid for "0000-01-01"', () => {
    expect(isBirthValid('0000-01-01')).toEqual({ valid: false, reason: 'invalid' });
  });

  // Datas futuras
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 2);
  const futureDateStr = futureDate.toISOString().split('T')[0];

  it.concurrent(`Should return future for future date "${futureDateStr}"`, () => {
    expect(isBirthValid(futureDateStr)).toEqual({ valid: false, reason: 'future' });
  });

  // Datas válidas (entre 1901 e hoje)
  it.concurrent('Should return valid for "2020-01-04"', () => {
    expect(isBirthValid('2020-01-04')).toEqual({ valid: true, reason: '' });
  });

  it.concurrent('Should return valid for "1950-10-23"', () => {
    expect(isBirthValid('1950-10-23')).toEqual({ valid: true, reason: '' });
  });

  it.concurrent('Should return valid for "1901-10-12"', () => {
    expect(isBirthValid('1901-10-12')).toEqual({ valid: true, reason: '' });
  });

  it.concurrent('Should return valid for today\'s date', () => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    expect(isBirthValid(todayStr)).toEqual({ valid: true, reason: '' });
  });

  it.concurrent('Should return valid for yesterday\'s date', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yestStr = yesterday.toISOString().split('T')[0];
    expect(isBirthValid(yestStr)).toEqual({ valid: true, reason: '' });
  });

  it.concurrent('Should return valid for 1999-12-31', () => {
    expect(isBirthValid('1999-12-31')).toEqual({ valid: true, reason: '' });
  });

  it.concurrent('Should return valid for 2015-06-15', () => {
    expect(isBirthValid('2015-06-15')).toEqual({ valid: true, reason: '' });
  });

  it.concurrent('Should return valid for 1901-01-01', () => {
    expect(isBirthValid('1901-01-01')).toEqual({ valid: true, reason: '' });
  });

  it.concurrent('Should return valid for leap year 2000-02-29', () => {
    expect(isBirthValid('2000-02-29')).toEqual({ valid: true, reason: '' });
  });

  it.concurrent('Should return valid for 2023-12-31', () => {
    expect(isBirthValid('2023-12-31')).toEqual({ valid: true, reason: '' });
  });
});