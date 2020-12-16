import { s } from './input.mjs';

let a = s.split`\n`;
function rules(a) {
  const copy = [...a];
  for (let i = 0; i < a.length; i++) {
    copy[i] = copy[i].split``;
    for (let j = 0; j < a[i].length; j++) {
      const adj = [
        a[i - 1]?.[j],
        a[i - 1]?.[j - 1],
        a[i - 1]?.[j + 1],
        a[i]?.[j - 1],
        a[i]?.[j + 1],
        a[i + 1]?.[j - 1],
        a[i + 1]?.[j],
        a[i + 1]?.[j + 1],
      ].filter((x) => x === '#').length;
      if (a[i][j] === '#' && adj >= 4) copy[i][j] = 'L';
      if (a[i][j] === 'L' && adj === 0) copy[i][j] = '#';
    }
    copy[i] = copy[i].join``;
  }
  return copy;
}
let prev = null;
while (JSON.stringify(prev) !== JSON.stringify(a)) {
  prev = [...a];
  a = rules(a);
}
console.log([...a.join``].filter((x) => x === '#').length);
