import { s } from './input.mjs';

const a = s.split('\n');
let acc = 0;
let ops = {};
for (let i = 0; i < a.length; i++) {
  ops[i] = (ops[i] || 0) + 1;
  if (ops[i] === 2) {
    console.log(acc);
    break;
  }
  if (a[i].startsWith('nop')) continue;
  if (a[i].startsWith('acc')) acc = eval(`${acc}${a[i].split` `[1]}`);
  else if (a[i].startsWith('jmp')) i = eval(`${i}${a[i].split` `[1]}`) - 1;
}
