import { s } from './input.mjs';

// I spent hours trying to figure this out, I confess that this is not my solution really, this is from the solution megathread on Reddit, just converted to JS. Sorry about that ;-)

const busIDs = s.split`\n`[1].split`,`;
const nums = busIDs.filter((x) => x !== 'x').map((x) => [BigInt(x), BigInt(busIDs.indexOf(x))]);
let t = 0n,
  st = 1n;

nums.forEach(([id, i]) => {
  while ((t + i) % id !== 0n) t += st;
  st *= id;
});

console.log(t);
