import { s } from './input.mjs';

const sp = s.split('\n');

function find(j) {
  const cur = sp.filter((x) => x.slice(1).includes(j));
  return [
    ...new Set([
      ...cur,
      ...cur.map((x) => x.match(/^.+(?= contain)/)[0].replace(/bags?/g, '')).flatMap((y) => find(y)),
    ]),
  ].sort();
}

console.log(find('shiny gold').length);
