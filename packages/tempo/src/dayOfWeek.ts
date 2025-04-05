import type { DataManupulation } from './lib';

export type _DaysOfWeek =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

/* Days of Week */
export const dayOfWeekList: { [key in number]: _DaysOfWeek } = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

const dowListBr: { [key in number]: string } = {
  0: 'Domingo',
  1: 'Segunda-feira',
  2: 'Terça-feira',
  3: 'Quarta-feira',
  4: 'Quinta-feira',
  5: 'Sexta-feira',
  6: 'Sábado',
};

export const getDayOfWeekOf = (date: DataManupulation): _DaysOfWeek | '' => {
  const dow = date.$dow; // day of week
  return dayOfWeekList[dow] || '';
};

export const getDayOfWeekTranslatedOf = (
  date: DataManupulation,
  withFeira = false,
): string => {
  const dow = date.$dow;
  const value = dowListBr[dow] || '';
  if (withFeira) {
    return value;
  }
  return value ? value.split('-')[0] : '';
};
