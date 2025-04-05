import { DataManupulation } from './lib';

type Mode = 'short' | 'description' | 'detalhed';

const modes: { [key in Mode]: (date: string) => string | number } = {
  short: (birth: string) => {
    return new DataManupulation().diff(new Date(birth), 'year');
  },
  description: (birth: string) => {
    const year = new DataManupulation().diff(new Date(birth), 'year');
    return `${year} ano${year > 1 ? 's' : ''}`;
  },
  detalhed: (birth: string) => {
    const ref = new DataManupulation();
    const birthDate = new Date(birth);
    const year = ref.diff(birthDate, 'year');
    const monthRef = ref.subtract(year, 'year');
    const month = monthRef.diff(birthDate, 'month');
    const days = monthRef.subtract(month, 'month').diff(birthDate, 'day');

    return [
      year > 0 ? [year, ` ano${year > 1 ? 's' : ''}, `].join('') : '',
      month > 0
        ? [month, ` ${month > 1 ? 'meses' : 'mês'}`, ' e '].join('')
        : '',
      days,
      ` dia${days > 1 ? 's' : ''}`,
    ].join('');
  },
};

export const getYearOld = (birth: string, mode: Mode = 'short') => {
  return modes[mode](birth);
};
