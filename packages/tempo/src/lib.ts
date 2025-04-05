import { textCapitalize } from '@etcdigital/texto';

export const SECONDS_A_MINUTE = 60;
export const SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
export const SECONDS_A_DAY = SECONDS_A_HOUR * 24;
export const SECONDS_A_WEEK = SECONDS_A_DAY * 7;

export const MILLISECONDS_A_SECOND = 1e3;
export const MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
export const MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
export const MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
export const MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;

type _Unit =
  | 'millisecond'
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'month'
  | 'year';

type _UnitDiff = _Unit | 'week';
type _UnitStartOf = 'month' | 'week';

const unitMethod: {
  [key in _Unit]: { set: string; get: string };
} = {
  year: { get: 'getFullYear', set: 'setFullYear' },
  month: { get: 'getMonth', set: 'setMonth' },
  day: { get: 'getDate', set: 'setDate' },
  hour: { get: 'getHours', set: 'setHours' },
  millisecond: { get: 'getMilliseconds', set: 'setMilliseconds' },
  minute: { get: 'getMinutes', set: 'setMinutes' },
  second: { get: 'getSeconds', set: 'setSeconds' },
};

const lang = 'pt-br';
const timeZone = 'America/Sao_Paulo';

const formatDatePreset: Partial<Intl.DateTimeFormatOptions> = {
  timeZone,
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};

const formatTimePreset: Partial<Intl.DateTimeFormatOptions> = {
  timeZone,
  hour: '2-digit',
  minute: 'numeric',
};

const isUndefined = (s: any) => s === undefined;

const positive = (v: number) => (v < 0 ? v * -1 : v);

const normalizeTime = () => {
  const hourCeil = Math.ceil(new Date().getTimezoneOffset() / 60);

  return `${hourCeil > 9 ? '' : '0'}${hourCeil}:00:00`;
};

const monthDiff = (a: DataManupulation, b: DataManupulation): number => {
  if (a.toDate() < b.toDate()) {
    return -monthDiff(b, a);
  }
  const wholeMonthDiff = (b.$y - a.$y) * 12 + (b.$M - a.$M);
  const anchor = a.add(wholeMonthDiff, 'month').getTime();
  const bTime = b.getTime();
  const c = bTime - anchor < 0;
  const anchor2 = a.add(wholeMonthDiff + (c ? -1 : 1), 'month').$M;
  return +(
    -(
      wholeMonthDiff +
      (bTime - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)
    ) || 0
  );
};

const REGEX_PARSE =
  /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
const parseDate = (date: any) => {
  if (date === null) return new Date(Number.NaN); // null is invalid
  if (isUndefined(date)) return new Date(); // today
  if (typeof date === 'string') {
    if (!/Z$/i.test(date)) {
      const d: any = date.match(REGEX_PARSE);
      if (d) {
        const m = d[2] - 1 || 0;
        const ms = (d[7] || '0').slice(0, 3);
        return new Date(
          d[1],
          m,
          d[3] || 1,
          d[4] || 0,
          d[5] || 0,
          d[6] || 0,
          ms,
        );
      }
    }

    if (date.length === 10) {
      return new Date(`${date.split('/').join('-')}T${normalizeTime()}Z`);
    }

    if (date.length === 8) {
      const dt = [
        date.substring(0, 4),
        date.substring(4, 6),
        date.substring(6, 8),
      ].join('-');

      return new Date(`${dt.split('/').join('-')}T${normalizeTime()}Z`);
    }
  }

  return new Date(date); // everything else
};

type _Datahora = any;

export class DataManupulation {
  $d: Date; // Objeto Date
  $y: number; // Ano completo
  $M: number; // Mês (iniciando em 0)
  $D: number; // Dia
  $dow: number; // Dia da semana
  $H: number; // Hora
  $m: number; // Minutos
  $s: number; // Segundos
  $ms: number; // Milesegundos

  constructor(date?: _Datahora) {
    this.$d = parseDate(date);
    this.$y = this.$d.getFullYear();
    this.$M = this.$d.getMonth();
    this.$D = this.$d.getDate();
    /* this.$W */ this.$dow = this.$d.getDay();
    this.$H = this.$d.getHours();
    this.$m = this.$d.getMinutes();
    this.$s = this.$d.getSeconds();
    this.$ms = this.$d.getMilliseconds();
  }

  /**
   * Formata a data por extenso -> 23 de janeiro de 2022
   * @returns string
   */
  toDateExtense() {
    return this.$d.toLocaleDateString(lang, {
      ...formatDatePreset,
      month: 'long',
    });
  }

  toWeekDayAndDateMonth() {
    return this.$d.toLocaleDateString(lang, {
      timeZone,
      day: 'numeric',
      month: 'numeric',
    });
  }

  toDateWithZeroTime() {
    return new Date(`${this.toDateDash()}T00:00:00.000Z`);
  }

  /**
   * Formata a data por extenso -> Segunda, 23 de janeiro de 2022
   * @returns string
   */
  toWeekDayAndDateExtense(
    format: Intl.DateTimeFormatOptions['weekday'] = 'long',
  ) {
    return this.$d.toLocaleDateString(lang, {
      ...formatDatePreset,
      weekday: format,
      month: 'long',
    });
  }

  toDayMonthSort() {
    return this.$d
      .toLocaleDateString(lang, {
        day: 'numeric',
        month: 'short',
      })
      .replace('.', '');
  }

  /**
   * Formata a hora por extenso -> 12:45
   * @returns string
   */
  toTimeString() {
    return this.$d.toLocaleTimeString(lang, formatTimePreset);
  }

  toTimeWithSecondsString() {
    return this.$d.toLocaleTimeString(lang, {
      ...formatTimePreset,
      second: '2-digit',
    });
  }

  /**
   * Formata a data por / -> 23/10/2022
   * @returns string
   */
  toDateSlash() {
    return this.$d.toLocaleDateString(lang, formatDatePreset);
  }

  /**
   * Formata a data por / -> 23/10/2022 12:45:00
   * @returns string
   */
  toFullDateTimeSlash() {
    return this.$d.toLocaleDateString(lang, {
      ...formatDatePreset,
      ...formatTimePreset,
      second: '2-digit',
    });
  }

  /**
   * Retorna o nome do mês em formato curto -> Mai | Out | Dez
   * @returns string
   */
  toMonthNameShort() {
    const name = this.$d.toLocaleDateString(lang, {
      month: 'short',
    });
    return textCapitalize(name.replace('.', ''));
  }

  /**
   * /**
   * Retorna o nome do dia em formato -> S | Ter | Quarta
   * @param format Intl.DateTimeFormatOptions['weekday']
   * @param capitalized boolean
   * @returns string
   */
  toWeekDay(
    format: Intl.DateTimeFormatOptions['weekday'] = 'long',
    capitalized = true,
  ): string {
    const value = this.$d
      .toLocaleDateString(lang, { weekday: format })
      .replace('.', '')
      .trim()
      .split(',')[0];

    return capitalized ? textCapitalize(value) : value;
  }

  toDate() {
    return this.$d;
  }

  getTime() {
    return this.$d.getTime();
  }

  toISOString() {
    return this.$d.toISOString();
  }

  toWeekNumber() {
    const startOfYear = new Date(this.$d.getFullYear(), 0, 1);
    const week = Math.ceil(
      ((this.$d.getTime() - startOfYear.getTime()) / 86400000 +
        startOfYear.getDay() +
        1) /
        7,
    );
    return week;
  }

  /**
   * Formata a data por -, 2022-10-23
   * @returns string
   */
  toDateDash() {
    const [day, month, year] = this.$d
      .toLocaleDateString(lang, formatDatePreset)
      .split('/');
    return `${year}-${month}-${day}`;
  }

  toStartOfDay() {
    return `${this.toDateDash()}T00:00:00.000Z`;
  }
  toEndOfDay() {
    return `${this.toDateDash()}T23:59:59.999Z`;
  }

  set(value: number, unit: _Unit) {
    const method = unitMethod[unit];
    const date: any = new Date(this.toISOString());
    date[method.set](value);
    return new DataManupulation(date);
  }

  add(value: number, unit: _Unit) {
    const method = unitMethod[unit];
    const date: any = new Date(this.toISOString());
    date[method.set](date[method.get]() + value);
    return new DataManupulation(date);
  }

  subtract(value: number, unit: _Unit) {
    return this.add(value * -1, unit);
  }

  diffFull(
    date: _Datahora,
    returnPositive = true,
  ): {
    [key in _UnitDiff]: number;
  } {
    const to = new DataManupulation(date);
    const monthCalc = monthDiff(this, to);

    const InMs = this.$d.getTime() - to.$d.getTime();
    const inSeconds = InMs / MILLISECONDS_A_SECOND;
    const inMinutes = InMs / MILLISECONDS_A_MINUTE;
    const inHour = Math.floor(InMs / MILLISECONDS_A_HOUR);
    const inDays = Math.floor(InMs / MILLISECONDS_A_DAY);
    const inWeek = Math.floor(InMs / MILLISECONDS_A_WEEK);

    const inYear = Math.floor(monthCalc / 12);
    const inMonth = Math.floor(monthCalc);

    /* Checar novamente, por motivos de 2022/12 - 2023/1 não tem diferença de 1 ano */
    const inYearCheck = Math.floor(InMs / (MILLISECONDS_A_DAY * 356));

    const fn = returnPositive ? positive : (v: any) => v;

    return {
      day: fn(inDays),
      hour: fn(inHour),
      millisecond: fn(InMs),
      minute: fn(inMinutes),
      month: fn(inMonth),
      second: fn(inSeconds),
      year: inYearCheck > 0 ? fn(inYear) : 0,
      week: fn(inWeek),
    };
  }

  diff(date: _Datahora, unit: _UnitDiff, returnPositive = true): number {
    return this.diffFull(date, returnPositive)[unit];
  }

  setLocale(
    locales: Intl.LocalesArgument = lang,
    options: Intl.DateTimeFormatOptions = { timeZone: 'America/Sao_Paulo' },
  ) {
    return new DataManupulation(this.$d.toLocaleString(locales, options));
  }

  is() {
    return {
      today: this.isToday(),
      tomorrow: this.isTomorrow(),
      yesterday: this.isYesterday(),
    };
  }

  isToday() {
    const comparation = datetime().toDateDash();
    return comparation === this.toDateDash();
  }
  isTomorrow() {
    const comparation = datetime().add(1, 'day').toDateDash();
    return comparation === this.toDateDash();
  }
  isYesterday() {
    const comparation = datetime().subtract(1, 'day').toDateDash();
    return comparation === this.toDateDash();
  }

  startOf(unit: _UnitStartOf, reverse = false) {
    if (unit === 'month') {
      return datetime(
        reverse
          ? new Date(this.$y, this.$M + 1, 0)
          : new Date(this.$y, this.$M, 1),
      );
    }
    const day = this.$d.getDay();
    const diff = this.$d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    const startOfWeek = datetime(new Date(this.$d.setDate(diff)));
    if (reverse) {
      return startOfWeek.add(6, 'day');
    }
    return startOfWeek;
  }

  endOf(unit: _UnitStartOf) {
    return this.startOf(unit, true);
  }

  range(period: 'week') {
    return { start: this.startOf(period), end: this.endOf(period) };
  }

  /* 
  
  Next:
    isSameOfAfter
    isSameOrBefore
    isBefore
    isAfter
  */
}
export const datetime = (datetime?: _Datahora) => {
  return new DataManupulation(datetime);
};

export const createDatetimeFromToDash = (date: string) =>
  datetime(new Date(`${date}T12:00:00.000Z`));

export const createDatetimeFromToTimeOnly = (time: string) =>
  datetime(new Date(`${datetime().toDateDash()}T${time}:00.000Z`));
