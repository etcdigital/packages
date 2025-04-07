import { describe } from 'node:test';
import { expect, test } from 'vitest';
import { list2phase, textCapitalize } from './';

describe('textCapitalize', () => {
  test('Should return a string capitalize', () => {
    expect(
      textCapitalize('Should return a string with a 0 before numbers'),
    ).toBe('Should Return A String With A 0 Before Numbers');
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
});

describe('list2phase', () => {
  test('retorna string vazia se o array estiver vazio', () => {
    expect(list2phase([])).toBe('');
  });

  test('retorna o único item se houver apenas um', () => {
    expect(list2phase(['maçã'])).toBe('maçã');
  });

  test('retorna os dois itens com "e" se houver dois', () => {
    expect(list2phase(['maçã', 'banana'])).toBe('maçã e banana');
  });

  test('retorna os três itens com vírgula e "e" no último', () => {
    expect(list2phase(['maçã', 'banana', 'laranja'])).toBe(
      'maçã, banana e laranja',
    );
  });

  test('retorna corretamente com quatro itens', () => {
    expect(list2phase(['maçã', 'banana', 'laranja', 'uva'])).toBe(
      'maçã, banana, laranja e uva',
    );
  });

  test('retorna corretamente com cinco itens', () => {
    expect(list2phase(['a', 'b', 'c', 'd', 'e'])).toBe('a, b, c, d e e');
  });

  test('mantém espaços e capitalização dos itens', () => {
    expect(list2phase([' Maçã ', ' Banana', 'Laranja '])).toBe(
      ' Maçã ,  Banana e Laranja ',
    );
  });

  test('funciona com itens contendo vírgulas', () => {
    expect(list2phase(['pão, queijo', 'presunto'])).toBe(
      'pão, queijo e presunto',
    );
  });

  test('funciona com strings vazias dentro da lista', () => {
    expect(list2phase(['', 'banana'])).toBe(' e banana');
  });

  test('funciona com itens repetidos', () => {
    expect(list2phase(['maçã', 'maçã', 'maçã'])).toBe('maçã, maçã e maçã');
  });
});
