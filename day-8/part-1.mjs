import { s } from './input.mjs';

export function f(a) {
  let acc = 0;
  let ops = {};
  for (let i = 0; i < a.length; i++) {
    ops[i] = (ops[i] || 0) + 1;
    if (ops[i] === 2) {
      return acc;
    }
    if (a[i].startsWith('nop')) continue;
    if (a[i].startsWith('acc')) acc = eval(`${acc}${a[i].split` `[1]}`);
    else if (a[i].startsWith('jmp')) i = eval(`${i}${a[i].split` `[1]}`) - 1;
  }
  return { acc };
}

// console.log(f(s.split`\n`));
