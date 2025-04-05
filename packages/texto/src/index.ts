const wordCapitalize = (word: string) =>
  word ? word[0].toUpperCase() + word.slice(1) : '';

export const textCapitalize = (sentence: string, justFirst = false) => {
  if (justFirst) {
    return wordCapitalize(sentence.toLowerCase());
  }

  return sentence.toLowerCase().split(' ').map(wordCapitalize).join(' ');
};
