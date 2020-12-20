import { s } from './input.mjs';

let east = 0,
  north = 0;
const order = 'NESW';
let dir = 90;
function move(dir, num) {
  switch (dir) {
    case 'N':
      north += num;
      break;
    case 'S':
      north -= num;
      break;
    case 'W':
      east -= num;
      break;
    case 'E':
      east += num;
      break;
  }
}
for (const x of s.split`\n`) {
  let [command, ...num] = x;
  num = +num.join``;
  switch (command) {
    case 'R':
      dir += num;
      break;
    case 'L':
      dir -= num;
      break;
    case 'F':
      move(order[(dir / 90) & 3], num);
      break;
    default:
      move(command, num);
  }
}
console.log(east, north, Math.abs(east) + Math.abs(north));
