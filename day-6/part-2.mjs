import { s } from './input.mjs';

let n = 0;
for (const x of s.split(/\n\n/g)) {
  const a = [...new Set(x.replace(/\n/g, ''))];
  const sp = x.split(/\n/g);
  n += a.filter((x) => sp.every((y) => y.includes(x))).length;
}
console.log(n);
