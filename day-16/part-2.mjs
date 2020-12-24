import { s } from './input.mjs';

const [rules, mine, nearby] = s.split`\n\n`;
const ruleNames = rules.split('\n').map((x) => x.split(':')[0]);
const parsedRules = rules
  .split('\n')
  .map((x) => x.split(': ')[1].split(' or ').join('-').split('-').map(Number));
const parsedNearby = nearby
  .split('\n')
  .slice(1)
  .map((x) => x.split(',').map(Number))
  .filter(
    (x) => !x.some((x) => parsedRules.every(([a, b, c, d]) => !((x >= a && x <= b) || (x >= c && x <= d))))
  );
const gp = {};
const sure = {};
ruleNames.forEach((z, j) => {
  let e = [];
  parsedNearby.forEach((x) => {
    let p = [];
    x.forEach((x, i) => {
      const [a, b, c, d] = parsedRules[j];
      if ((x >= a && x <= b) || (x >= c && x <= d)) p.push(i);
    });
    e.push(p);
  });
  gp[z] = e[0].filter((x) => e.every((y) => y.includes(x)));
});
const o = Object.entries(gp).sort(([, a], [, b]) => a.length - b.length);
for (const [t, a] of o) {
  if (a.length === 1) {
    sure[t] = a[0];
    o[t] = [];
    o.forEach((_, i) => (o[i][1] = o[i][1].filter((x) => x !== a[0])));
  }
}
const parsedMine = mine.split('\n')[1].split(',');
console.log(
  Object.entries(sure)
    .filter(([x]) => x.startsWith('departure'))
    .map((x) => x[1])
    .reduce((x, y) => x * parsedMine[y], 1)
);
