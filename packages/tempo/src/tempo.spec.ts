import { beforeAll, describe, expect, it, vi } from 'vitest';
import { datetime } from './lib';
import { getYearOld } from './yearOld';

describe('Datahora Format', () => {
  beforeAll(() => {
    const date = new Date(2023, 0, 19, 11, 32, 44, 654);
    vi.useFakeTimers();
    vi.setSystemTime(date);
  });

  it('toExtense', () => {
    expect(datetime().toDateExtense()).toBe('19 de janeiro de 2023');
  });

  it('toDateSlash', () => {
    expect(datetime().toDateSlash()).toBe('19/01/2023');
  });

  it('toDateDash', () => {
    expect(datetime().toDateDash()).toBe('2023-01-19');
  });

  it('toTimeString', () => {
    expect(datetime().toTimeString()).toBe('11:32');
  });
  it('toTimeWithSecondsString', () => {
    expect(datetime().toTimeWithSecondsString()).toBe('11:32:44');
  });

  it('add 1 day', () => {
    expect(datetime().add(1, 'day').toDateDash()).toBe('2023-01-20');
  });

  it('add 406 day - leap year', () => {
    expect(datetime().add(406, 'day').toDateDash()).toBe('2024-02-29');
  });

  it('add 1 month - leap year', () => {
    expect(datetime().add(1, 'month').toDateDash()).toBe('2023-02-19');
  });

  it('add 1 year - leap year', () => {
    expect(datetime().add(1, 'year').toDateDash()).toBe('2024-01-19');
  });

  it('add 1 year, 1 month, 1 day and 1 hour - leap year', () => {
    expect(
      datetime()
        .add(1, 'year')
        .add(1, 'month')
        .add(1, 'day')
        .add(1, 'hour')
        .toDateDash(),
    ).toBe('2024-02-20');
  });

  it('subtract 1 day', () => {
    expect(datetime().subtract(1, 'day').toDateDash()).toBe('2023-01-18');
  });

  it('subtract 30 day - leap year', () => {
    expect(datetime().subtract(30, 'day').toDateDash()).toBe('2022-12-20');
  });

  it('subtract 1 month - leap year', () => {
    expect(datetime().subtract(1, 'month').toDateDash()).toBe('2022-12-19');
  });

  it('subtract 1 year - leap year', () => {
    expect(datetime().subtract(1, 'year').toDateDash()).toBe('2022-01-19');
  });

  it('subtract 1 year, 1 month, 1 day and 1 hour', () => {
    expect(
      datetime()
        .subtract(1, 'year')
        .subtract(1, 'month')
        .subtract(1, 'day')
        .subtract(1, 'hour')
        .toDateDash(),
    ).toBe('2021-12-18');
  });

  it('subtract 1 month and add 2 day', () => {
    expect(datetime().subtract(1, 'month').add(2, 'day').toDateDash()).toBe(
      '2022-12-21',
    );
  });

  it('diff from 02/01/2023 in days', () => {
    expect(datetime().diff(new Date(2023, 0, 2, 12, 0, 0, 0), 'day')).toBe(16);
  });

  it('diff from 18/01/2022 in year', () => {
    expect(datetime().diff(new Date(2022, 12, 18, 12, 0, 0, 0), 'year')).toBe(
      0,
    );
  });

  it('diff from 17/01/2021 in year', () => {
    expect(datetime().diff(new Date(2021, 0, 19, 12, 0, 0, 0), 'year')).toBe(2);
  });

  it('diff from 18/12/2022 in year', () => {
    expect(datetime().diff(new Date(2022, 11, 18, 12, 0, 0, 0), 'month')).toBe(
      1,
    );
  });

  it('diff from 23/10/1992 in days', () => {
    expect(datetime().diff(new Date(1992, 9, 23, 12, 0, 0, 0), 'day')).toBe(
      11044,
    );
  });

  it('diff from 23/10/1992 in week', () => {
    expect(datetime().diff(new Date(1992, 9, 23, 12, 0, 0, 0), 'week')).toBe(
      1577,
    );
  });

  it('diff from 02/12/1969 in days', () => {
    expect(datetime().diff(new Date(1969, 11, 2, 12, 0, 0, 0), 'day')).toBe(
      19405,
    );
  });

  it('diff from 02/12/1969 in week', () => {
    expect(datetime().diff(new Date(1969, 11, 2, 12, 0, 0, 0), 'week')).toBe(
      2772,
    );
  });

  it('is - today, without date set', () => {
    const isObject = datetime().is();
    expect(isObject.today).toBe(true);
    expect(isObject.tomorrow).toBe(false);
    expect(isObject.yesterday).toBe(false);
  });

  it('is - tomorrow', () => {
    const isObject = datetime(new Date(2023, 0, 20, 11, 32, 44, 654)).is();
    expect(isObject.today).toBe(false);
    expect(isObject.tomorrow).toBe(true);
    expect(isObject.yesterday).toBe(false);
  });

  it('is - yesterday', () => {
    const isObject = datetime(new Date(2023, 0, 18, 11, 32, 44, 654)).is();
    expect(isObject.today).toBe(false);
    expect(isObject.tomorrow).toBe(false);
    expect(isObject.yesterday).toBe(true);
  });

  it('startOf - month', () => {
    const startOf = datetime(new Date(2024, 1, 18, 11, 32, 44, 654)).startOf(
      'month',
    );
    expect(startOf.$y).toBe(2024);
    expect(startOf.$M).toBe(1);
    expect(startOf.$D).toBe(1);
  });

  it('endOf - month', () => {
    const startOf = datetime(new Date(2024, 1, 18, 11, 32, 44, 654)).endOf(
      'month',
    );
    expect(startOf.$y).toBe(2024);
    expect(startOf.$M).toBe(1);
    expect(startOf.$D).toBe(29);
  });

  it('startOf - week - start on monday', () => {
    const startOf = datetime(new Date(2024, 1, 20, 11, 32, 44, 654)).startOf(
      'week',
    );
    expect(startOf.$y).toBe(2024);
    expect(startOf.$M).toBe(1);
    expect(startOf.$D).toBe(19);
  });

  it('endOf - week - start on monday', () => {
    const startOf = datetime(new Date(2024, 1, 21, 11, 32, 44, 654)).endOf(
      'week',
    );
    expect(startOf.$y).toBe(2024);
    expect(startOf.$M).toBe(1);
    expect(startOf.$D).toBe(25);
  });
});

describe('isToday - Edge 1', () => {
  beforeAll(() => {
    vi.setSystemTime(new Date('2022-04-28T11:52:02.889Z'));
  });

  it('case', () => {
    const is = datetime('2023-04-29').isToday();
    expect(is).toBe(false);
  });
});

describe('getYearOld', () => {
  beforeAll(() => {
    vi.setSystemTime(new Date('2022-05-30'));
  });

  it('Short #Case 1', () => {
    expect(getYearOld('2016-04-16')).toBe(6);
  });

  it('Short #Case 2', () => {
    expect(getYearOld('1992-04-19')).toBe(30);
  });

  it('Description #Case 1', () => {
    expect(getYearOld('2011-04-16', 'description')).toBe('11 anos');
  });

  it('Detalhed #Case 1', () => {
    expect(getYearOld('2021-04-19', 'detalhed')).toBe('1 ano, 1 mês e 11 dias');
  });

  it('Detalhed #Case 2', () => {
    expect(getYearOld('2016-04-16', 'detalhed')).toBe(
      '6 anos, 1 mês e 14 dias',
    );
  });

  it('Detalhed #Case 3 - apenas mes e dia', () => {
    expect(getYearOld('2022-04-16', 'detalhed')).toBe('1 mês e 14 dias');
  });

  it('Detalhed #Case 4 - apenas 2 mes e dia', () => {
    expect(getYearOld('2022-03-16', 'detalhed')).toBe('2 meses e 14 dias');
  });

  it('Detalhed #Case 5 - apenas dias', () => {
    expect(getYearOld('2022-05-16', 'detalhed')).toBe('14 dias');
  });
});

describe('Datahora Format', () => {
  beforeAll(() => {
    const date = new Date(2023, 0, 19, 0, 0, 0, 0);
    vi.useFakeTimers();
    vi.setSystemTime(date);
  });

  it('Test timezone', () => {
    const dt = datetime();
    expect(dt.$D).toBe(19);
  });
});
