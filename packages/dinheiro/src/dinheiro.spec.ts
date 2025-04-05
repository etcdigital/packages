import { describe, expect, it } from 'vitest';
import { MoneyCalculator, moneyFormat } from './lib';

describe('MoneyCalculator', () => {
  it('deve iniciar com valor 0.0', () => {
    const calc = new MoneyCalculator();
    expect(calc.amount).toBe(0);
  });

  it('deve somar corretamente números', () => {
    const calc = new MoneyCalculator();
    calc.sum(10);
    expect(calc.amount).toBe(10);
  });

  it('deve somar corretamente strings numéricas', () => {
    const calc = new MoneyCalculator();
    calc.sum('15.5');
    expect(calc.amount).toBe(15.5);
  });

  it('deve somar uma lista de números', () => {
    const calc = new MoneyCalculator();
    calc.sumList([10, 5.5, 2.5]);
    expect(calc.amount).toBe(18);
  });

  it('deve subtrair corretamente números', () => {
    const calc = new MoneyCalculator(20);
    calc.subtract(5);
    expect(calc.amount).toBe(15);
  });

  it('deve subtrair corretamente strings numéricas', () => {
    const calc = new MoneyCalculator(10);
    calc.subtract('2.5');
    expect(calc.amount).toBe(7.5);
  });

  it('deve subtrair uma lista de números', () => {
    const calc = new MoneyCalculator(20);
    calc.subtractList([5, 3.5]);
    expect(calc.amount).toBe(11.5);
  });

  it('deve adicionar múltiplos valores com add()', () => {
    const calc = new MoneyCalculator();
    calc.add([5, '10.25', 4.75] as any);
    expect(calc.amount).toBe(20);
  });

  it('deve remover múltiplos valores com remove()', () => {
    const calc = new MoneyCalculator(30);
    calc.remove([5, '2.5', 7.5] as any);
    expect(calc.amount).toBe(15);
  });

  it('deve encadear chamadas de add()', () => {
    const calc = new MoneyCalculator();
    calc.add(5).add(10);
    expect(calc.amount).toBe(15);
  });

  it('deve encadear chamadas de remove()', () => {
    const calc = new MoneyCalculator(20);
    calc.remove(5).remove(3);
    expect(calc.amount).toBe(12);
  });

  it('deve formatar o valor como moeda corretamente', () => {
    const calc = new MoneyCalculator(1234.56);
    expect(calc.format()).toBe('R$ 1.234,56');
  });

  it('deve formatar número negativo corretamente', () => {
    const calc = new MoneyCalculator(-9876.54);
    expect(calc.format()).toBe('R$ -9.876,54');
  });

  it('deve aceitar casas decimais customizadas no format()', () => {
    const calc = new MoneyCalculator(1.2345);
    expect(calc.format(3)).toEqual('R$ 1,234');
  });

  it('moneyFormat deve funcionar com valores positivos', () => {
    expect(moneyFormat(1000)).toBe('R$ 1.000,00');
  });

  it('moneyFormat deve funcionar com valores negativos', () => {
    expect(moneyFormat(-1000)).toBe('R$ -1.000,00');
  });

  it('moneyFormat deve funcionar com casas decimais customizadas', () => {
    expect(moneyFormat(12.3456, 3)).toBe('R$ 12,346');
  });

  it('somar e subtrair na mesma instância deve funcionar', () => {
    const calc = new MoneyCalculator();
    calc.sum(10);
    calc.subtract(3);
    expect(calc.amount).toBe(7);
  });

  it('add() e remove() devem funcionar com array misto de string e número', () => {
    const calc = new MoneyCalculator();
    calc.add(['5', 10] as any).remove(['2', 3] as any);
    expect(calc.amount).toBe(10);
  });

  it('deve lidar com valor inicial no construtor', () => {
    const calc = new MoneyCalculator(50.5);
    expect(calc.amount).toBe(50.5);
  });
});
