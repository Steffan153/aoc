import { s } from './input.mjs';

const [timestamp, busIDs] = s.split('\n');

const [busTime, busId] = busIDs
  .split(',')
  .filter((x) => x !== 'x')
  .map((x) => {
    for (let t = x * ((timestamp / x) | 0); ; t += +x) {
      if (t >= timestamp) return [t, x];
    }
  })
  .sort(([a], [b]) => a - b)[0];
console.log((busTime - timestamp) * busId);
