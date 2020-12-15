import { s } from './input.mjs';
import { f } from './part-1.mjs';

const a = s.split`\n`;

for (let i = 0; i < a.length; i++) {
  if (a[i].startsWith('jmp')) {
    const copy = [...a];
    copy[i] = copy[i].replace('jmp', 'nop');
    const res = f(copy);
    if (res.acc) {
      console.log(res.acc);
      break;
    }
  }
  if (a[i].startsWith('nop')) {
    const copy = [...a];
    copy[i] = copy[i].replace('nop', 'jmp');
    const res = f(copy);
    if (res.acc) {
      console.log(res.acc);
      break;
    }
  }
}
