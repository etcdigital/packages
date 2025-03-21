import { addDays, isBefore, isValid, parseISO } from 'date-fns';
import { isDateValid } from '../date-valid';

interface Response {
  valid: boolean;
  reason: '' | 'past' | 'future';
}

export const isBirthValid = (value: string): Response => {
  if (!isDateValid(value)) {
    return { valid: false, reason: 'past' };
  }

  const valuesDate = parseISO(value);
  if (!isValid(valuesDate)) {
    return { valid: false, reason: 'past' };
  }

  const todayFullYear = valuesDate.getFullYear();
  if (todayFullYear <= 1900) {
    return { valid: false, reason: 'past' };
  }

  const tomorrow = addDays(new Date(), 1);
  const valueIsBeforeTomorrow = isBefore(valuesDate, tomorrow);

  if (valueIsBeforeTomorrow) {
    return { valid: true, reason: '' };
  }
  return { valid: false, reason: 'future' };
};