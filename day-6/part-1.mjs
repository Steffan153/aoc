import { s } from './input.mjs';

console.log(
  s
    .split(/\n\n/g)
    .map((x) => new Set(x.replace(/\n/g, '')).size)
    .reduce((a, b) => a + b, 0)
);
