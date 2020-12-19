import { s } from './input.mjs';

function see(a, i, j, x, y) {
  const r = [];
  for (;;) {
    r.push(a[(i += x)]?.[(j += y)]);
    if (!a[i]?.[j] || '#L'.includes(a[i]?.[j])) break;
  }
  return r;
}

let a = s.split`\n`;
function rules(a) {
  const copy = [...a];
  for (let i = 0; i < a.length; i++) {
    copy[i] = copy[i].split``;
    for (let j = 0; j < a[i].length; j++) {
      const adj = [
        ...see(a, i, j, -1, -1),
        ...see(a, i, j, -1, 0),
        ...see(a, i, j, -1, 1),
        ...see(a, i, j, 0, -1),
        ...see(a, i, j, 0, 1),
        ...see(a, i, j, 1, 1),
        ...see(a, i, j, 1, 0),
        ...see(a, i, j, 1, -1),
      ].filter((x) => x === '#').length;
      if (a[i][j] === '#' && adj >= 5) copy[i][j] = 'L';
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
