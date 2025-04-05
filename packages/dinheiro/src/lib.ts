import { currencySeparatorMask } from './utils';

const strFloat = (value: string | number): number =>
  Number.parseFloat(value.toString());

const float = (value: string): number => Number.parseFloat(value);

const floatFix = (value: number | string, fixed = 2): number => {
  const numberValue = typeof value === 'string' ? float(value) : value;
  return float(numberValue.toFixed(fixed));
};

export const moneyFormat = (amount: number, fixed = 2) => {
  const valorComFixo = amount.toFixed(fixed);
  const [unit, cents] = valorComFixo.split('.');
  const isMinus = unit.substring(0, 1) === '-';
  const value = isMinus ? unit.substring(1) : unit;

  return `R$ ${isMinus ? '-' : ''}${currencySeparatorMask(
    value,
    '.',
  )},${cents}`;
};

export class MoneyCalculator {
  public amount = 0.0;
  constructor(amount = 0.0) {
    this.amount = amount;
  }

  sum(amount: number | string): number {
    this.amount = floatFix(strFloat(this.amount) + strFloat(amount), 2);
    return this.amount;
  }

  add(amount: number | string | string[] | number[]) {
    if (Array.isArray(amount)) {
      for (const item of amount) {
        this.sum(item);
      }
    } else {
      this.sum(amount);
    }

    return this;
  }

  sumList(amounts: number[]): number {
    for (const amount of amounts) {
      this.sum(amount);
    }
    return this.amount;
  }

  subtract(amount: number | string): number {
    this.amount = floatFix(strFloat(this.amount) - strFloat(amount), 2);
    return this.amount;
  }

  remove(amount: number | string | string[] | number[]) {
    if (Array.isArray(amount)) {
      for (const item of amount) {
        this.subtract(item);
      }
    } else {
      this.subtract(amount);
    }

    return this;
  }

  subtractList(amounts: number[]): number {
    for (const amount of amounts) {
      this.subtract(amount);
    }
    return this.amount;
  }

  format(fixo = 2): string {
    return moneyFormat(this.amount, fixo);
  }
}
