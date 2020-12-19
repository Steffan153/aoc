import { s } from './input.mjs';

const a = s
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

const o = { 0: 1 };
for (const x of a) {
  o[x] = 0;
  if (x - 1 in o) o[x] += o[x - 1];
  if (x - 2 in o) o[x] += o[x - 2];
  if (x - 3 in o) o[x] += o[x - 3];
}
console.log(o[Math.max(...a)]);
