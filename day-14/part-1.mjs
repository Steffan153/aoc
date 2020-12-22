import { s } from './input.mjs';

let mask;
let vals = {};

function m(v) {
  const a = [...v.toString(2).padStart(36, '0')];
  [...mask].forEach((x, i) => {
    a[i] = x === 'X' ? a[i] : x;
  });
  return parseInt(a.join``, 2);
}

s.split`\n`.forEach((x) => {
  const [cmd, val] = x.split(' = ');
  if (cmd === 'mask') mask = val;
  else vals[+cmd.split('[')[1].slice(0, -1)] = m(+val);
});

console.log(Object.values(vals).reduce((a, b) => a + BigInt(b), 0n));
