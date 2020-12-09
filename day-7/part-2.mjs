import { s } from './input.mjs';

const sp = s.split('\n');

function find(j) {
  const l = sp.find((x) => x.startsWith(j));
  if (l.includes('no other bags')) return [];
  return l
    .match(/(?<=contain ).+$/)[0]
    .slice(0, -1)
    .split(', ')
    .flatMap((x, _, $, [n, a, b] = x.split(' ')) => [
      ...Array(+n).fill(x),
      ...Array(+n)
        .fill(find(`${a} ${b}`))
        .flat(),
    ]);
}

console.log(find('shiny gold').length);
