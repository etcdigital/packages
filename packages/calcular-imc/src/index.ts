interface _TableIMCItem {
  description: string;
  between: [number, number];
  result: string;
  level: number;
}

export const tableIMC: _TableIMCItem[] = [
  {
    description: 'Menor que 18,5',
    between: [0, 18.5],
    result: 'Magreza',
    level: 0,
  },
  {
    description: 'Entre 18,5 e 24,9',
    between: [18.5, 24.9],
    result: 'Normal',
    level: 0,
  },
  {
    description: 'Entre 25 e 29,9',
    between: [25, 29.9],
    result: 'Sobrepeso',
    level: 1,
  },
  {
    description: 'Entre 30 e 39,9',
    between: [30, 39.9],
    result: 'Obesidade',
    level: 2,
  },
  {
    description: 'Maior que 40',
    between: [40, 1000],
    result: 'Obesidade Grave',
    level: 3,
  },
];

/* 
BMI = (weight of body) / (height of body)
Unit of weight: Kilogram(Kg);
Unit of height: Meter(m);
Unit of BMI is kg/m2
*/
export const calculateIMC = (
  weightInKg: number,
  heightInCm: number,
): number => {
  const value = weightInKg / heightInCm;
  return value;
};

export const calculateIMCWithDescription = (
  weightInKg: number,
  heightInCm: number,
): _TableIMCItem => {
  const value = calculateIMC(weightInKg, heightInCm);
  const description = tableIMC.find(
    (i) => value >= i.between[0] && value <= i.between[1],
  );
  return description as _TableIMCItem;
};
