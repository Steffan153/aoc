// takes about 600ms to run... does the job tho lol

import { s } from './input.mjs';

let mask = '000000000000000000000000000000X1001X';
let vals = {};

function f(a) {
  if (!a.includes('X')) return [parseInt(a.join``, 2)];
  const i = a.indexOf('X');
  const c = [...a];
  c[i] = '0';
  const n = f(c);
  c[i] = '1';
  return [...n, ...f(c)];
}

function m(v) {
  const a = [...v.toString(2).padStart(36, '0')];
  [...mask].forEach((x, i) => {
    a[i] = x === '0' ? a[i] : x;
  });
  return f(a);
}

s.split`\n`.forEach((x) => {
  const [cmd, val] = x.split(' = ');
  if (cmd === 'mask') mask = val;
  else m(+cmd.split('[')[1].slice(0, -1)).forEach((x) => (vals[x] = val));
});

console.log(Object.values(vals).reduce((a, b) => a + BigInt(b), 0n));
