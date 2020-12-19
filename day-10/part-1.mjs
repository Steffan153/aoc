import { s } from './input.mjs';

const a = s
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

let ones = 1,
  threes = 1;
for (let i = 1; i < a.length; i++) {
  if (a[i] - a[i - 1] === 1) ones++;
  if (a[i] - a[i - 1] === 3) threes++;
}

console.log(ones * threes);
