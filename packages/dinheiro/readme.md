# 💰 MoneyCalculator

Uma biblioteca simples e precisa para realizar cálculos monetários com formatação brasileira (`R$`), com suporte a adições, subtrações, arrays e formatação customizada.

---

## 🚀 Funcionalidades

- ✅ Soma e subtração de valores (`number` ou `string`)
- ✅ Operações com arrays de valores
- ✅ Formatação monetária no padrão brasileiro
- ✅ Precisão com casas decimais fixas
- ✅ Encadeamento de chamadas (programação fluente)
- ✅ Testes unitários com [Vitest](https://vitest.dev)

---

## 📦 Instalação

```bash
pnpm install
```

## Exemplo de Uso

```ts
import { MoneyCalculator } from '@etcdigital/dinheiro';

const calc = new MoneyCalculator();

calc.add(100.25).add('50.75');
console.log(calc.amount); // 151
console.log(calc.format()); // R$ 151,00

calc.remove([10, '1.50']);
console.log(calc.amount); // 139.5
console.log(calc.format()); // R$ 139,50
```

## Formatação de moeda

```ts
import { moneyFormat } from '@etcdigital/dinheiro';

console.log(moneyFormat(1234.56)); // R$ 1.234,56
console.log(moneyFormat(-987.65)); // R$ -987,65
```

## 🧠 Estrutura
- MoneyCalculator — Classe principal para cálculo e controle do valor
- moneyFormat() — Função de formatação monetária com casas decimais configuráveis
- currencySeparatorMask() — Função auxiliar para separação de milhar (importada)