import { s } from './input.mjs';

function eachSlice(a, s, f) {
  for (let i = 0; i < a.length; i++) {
    f(a.slice(i, i + s));
  }
}

let a = s.split`\n`.map(Number);
a = a.slice(0, a.indexOf(1398413738));
for (let i = 2; i <= 20; i++) {
  eachSlice(a, i, (b) => {
    if (b.reduce((y, z) => y + z, 0) === 1398413738) {
      console.log(Math.min(...b) + Math.max(...b));
    }
  });
}
