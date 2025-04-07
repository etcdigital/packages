const wordCapitalize = (word: string) =>
  word ? word[0].toUpperCase() + word.slice(1) : '';

export const textCapitalize = (sentence: string, justFirst = false) => {
  if (justFirst) {
    return wordCapitalize(sentence.toLowerCase());
  }

  return sentence.toLowerCase().split(' ').map(wordCapitalize).join(' ');
};

export const list2phase = (items: string[]): string => {
  if (items.length === 0) {
    return '';
  }
  if (items.length === 1) {
    return items[0];
  }

  if (items.length === 2) {
    return items.join(' e ');
  }

  const itemsExceptLast = items.slice(0, items.length - 1);
  const lastItem = items[items.length - 1];
  return [itemsExceptLast.join(', '), lastItem].join(' e ');
};

export const reverseString = (str: string) => str.split('').reverse().join('')