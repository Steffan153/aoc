import { s } from './input.mjs';

let east = 0,
  north = 0,
  wpEast = 10,
  wpNorth = 1;
for (const x of s.split`\n`) {
  let [command, ...num] = x;
  num = +num.join``;
  switch (command) {
    case 'F':
      east += wpEast * num;
      north += wpNorth * num;
      break;
    case 'N':
      wpNorth += num;
      break;
    case 'S':
      wpNorth -= num;
      break;
    case 'E':
      wpEast += num;
      break;
    case 'W':
      wpEast -= num;
      break;
    default:
      num *= (Math.PI / 180) * (-1) ** (command === 'R');
      const rWpEast = Math.round(Math.cos(num) * wpEast - Math.sin(num) * wpNorth);
      wpNorth = Math.round(Math.sin(num) * wpEast + Math.cos(num) * wpNorth);
      wpEast = rWpEast;
      break;
  }
}
console.log(east, north, Math.abs(east) + Math.abs(north));
