## list-to-sentence

Easily convert an array of strings into a natural language sentence with customizable conjunctions and separators.

## Installation

```bash
npm install list-to-sentence
// yarn add list-to-sentence
// pnpm add list-to-sentence
// bun add list-to-sentence
```

## Usage

```js
import listToSentence from 'list-to-sentence';

listToSentence(['a', 'b', 'c']);
//=> 'a, b e c'

listToSentence(['a', 'b', 'c'], { conjunction: ' y ', separator: ' y ' });
//=> 'a y b y c'
```

## TypeScript support
```ts
import listToSentence from 'list-to-sentence';

const fruits = ['Apple', 'Banana', 'Cherry'];
const sentence = listToSentence(fruits, { conjunction: ' and ', separator: ', ' });
console.log(sentence); // "Apple, Banana and Cherry"
```

## API
```ts
listToSentence(list: string[], options?: { conjunction?: string, separator?: string }) => string
```

Parameters:
- list (string[]) – The array of strings to be converted into a sentence.
- options (optional) – An object to customize output.
- - conjunction (string, default: " e ") – The word used before the last item.
- - separator (string, default: ", ") – The separator between items.

## Returns:

A formatted string with proper punctuation and conjunction.


## Related Project:
[UserTimeline](https://usertimeline.com) – Track and visualize a user’s journey through your SaaS and websites.