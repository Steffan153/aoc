import { s } from './input.mjs';

const a = [...s.split(',').map(Number)];

for (let i = 0; i < 2020; i++) {
  const x = a[a.length - 1];
  if (a.indexOf(x) === a.lastIndexOf(x)) {
    a.push(0);
    continue;
  }
  a.push(a.length - 1 - a.slice(0, -1).lastIndexOf(x));
}

console.log(a[2019]);
