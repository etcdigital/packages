import { expect, test } from 'vitest';
import { textCapitalize } from './';

test('Should return a string capitalize', () => {
  expect(textCapitalize('Should return a string with a 0 before numbers')).toBe(
    'Should Return A String With A 0 Before Numbers',
  );
});
test('Should return a string with just the first word capitalized', () => {
  expect(
    textCapitalize('Should return a string with a 0 before numbers', true),
  ).toBe('Should return a string with a 0 before numbers');
});
test('Should return a string with all words capitalized - first word send if miniscule', () => {
  expect(textCapitalize('return a string with')).toBe('Return A String With');
});
test('Should return a string with first word capitalized - first word send if miniscule', () => {
  expect(textCapitalize('return a string with', true)).toBe(
    'Return a string with',
  );
});
