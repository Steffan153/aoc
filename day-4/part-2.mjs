import { s } from './input.mjs';

const f = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const a = s.split`\n\n`.map((x) => x.split('\n').join(' '));

console.log(
  a
    .map((x) => x.split(' '))
    .filter(
      (x, _, $, z = x.map((z) => z.split(':')[0]), t = Object.fromEntries(x.map((z) => z.split(':')))) =>
        f.every((y) => z.includes(y)) &&
        t.byr >= 1920 &&
        t.byr <= 2002 &&
        t.iyr >= 2010 &&
        t.iyr <= 2020 &&
        t.eyr >= 2020 &&
        t.eyr <= 2030 &&
        (t.hgt.endsWith('cm')
          ? t.hgt.slice(0, -2) >= 150 && t.hgt.slice(0, -2) <= 193
          : t.hgt.endsWith('in')
          ? t.hgt.slice(0, -2) >= 59 && t.hgt.slice(0, -2) <= 76
          : false) &&
        /^#[a-f0-9]{6}$/.test(t.hcl) &&
        /^amb|blu|brn|gry|grn|hzl|oth$/.test(t.ecl) &&
        /^\d{9}$/.test(t.pid)
    ).length
);
