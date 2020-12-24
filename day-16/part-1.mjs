import { s } from './input.mjs';

const [rules, , nearby] = s.split`\n\n`;
const parsedRules = rules
  .split('\n')
  .map((x) => x.split(': ')[1].split(' or ').join('-').split('-').map(Number));
const parsedNearby = nearby.split('\n').slice(1).join(',').split(',').map(Number);
console.log(
  parsedNearby
    .filter((x) => parsedRules.every(([a, b, c, d]) => !((x >= a && x <= b) || (x >= c && x <= d))))
    .reduce((a, b) => a + b, 0)
);
