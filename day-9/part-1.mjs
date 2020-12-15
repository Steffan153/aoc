import { s } from './input.mjs';

const a = s.split`\n`.map(Number);
for (let i = 25; i < a.length; i++) {
  const w = a.slice(i - 25, i);
  let f = false;
  o: for (let j = 0; j < w.length; j++) {
    for (let k = 0; k < w.length; k++) {
      if (k === j) continue;
      if (w[k] + w[j] === a[i]) {
        f = true;
        break o;
      }
    }
  }
  if (!f) {
    console.log(a[i]);
    break;
  }
}
