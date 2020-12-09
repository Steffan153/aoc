import { s } from './input.mjs';

const a = [];
for (const x of s.split('\n')) {
  const row = parseInt(x.slice(0, 7).replace(/F/g, '0').replace(/B/g, '1'), 2);
  const col = parseInt(x.slice(7).replace(/L/g, '0').replace(/R/g, '1'), 2);
  a.push(row * 8 + col);
}

for (let i = 0; i <= 908; i++) {
  if (!a.includes(i)) console.log(i);
}
