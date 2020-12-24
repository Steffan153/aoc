import { s } from './input.mjs';

const input = s.split(',').map(Number);
const a = Array(30_000_000);
const indexes = {};
const lastIndexes = {};
input.forEach((x, i) => ((a[i] = x), (indexes[x] = i), (lastIndexes[x] = i === input.length - 1 ? -1 : i)));

for (let i = input.length; i < 30_000_000; i++) {
  const x = a[i - 1];
  if (indexes[x] === i - 1) {
    a[i] = 0;
    if (indexes[0] === undefined) indexes[0] = i;
    lastIndexes[x] = i - 1;
    continue;
  }
  a[i] = i - 1 - lastIndexes[x];
  lastIndexes[x] = i - 1;
  if (indexes[a[i]] === undefined) indexes[a[i]] = i;
}

console.log(a[30_000_000 - 1]);
