import { toStr } from '@etcdigital/safe-to';

export const phoneMask = (value: string): string => {
  // Remove todos os caracteres não numéricos
  const cleanedValue = toStr(value).replace(/(?!^\+)\D/g, '');

  if (cleanedValue.startsWith('+55')) {
    return cleanedValue.replace(/(\+\d{2})(\d{2})(\d{5})(\d+)/, '$1 $2 $3 $4');
  }

  if (cleanedValue.startsWith('+')) {
    return cleanedValue;
  }

  // Caso padrão para números sem prefixo específico
  return cleanedValue
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d+)/, '$1-$2');
};