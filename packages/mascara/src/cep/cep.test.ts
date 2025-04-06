import { describe, expect, it } from 'vitest';
import { cepMask } from './';

describe('Format CEP', () => {
  it.concurrent('should return the cpf with dots and hiffens', () => {
    expect(cepMask('85601610')).toBe('85601-610');
  });
});
