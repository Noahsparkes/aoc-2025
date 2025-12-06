import { readFileSync } from "fs";
import { join } from "path";

const input = readFileSync(join(__dirname, "input.txt"), "utf8").trim();
const lines = input.split(/\r?\n/).filter(Boolean);

let pos = 50;
let zeroCount = 0;

for (const line of lines) {
  const dir = line[0];
  const dist = Number(line.slice(1));
  if (isNaN(dist)) continue;

  // Step one click at a time
  for (let i = 0; i < dist; i++) {
    if (dir === "L") {
      pos--;
    } else {
      pos++;
    }
    pos = (pos + 100) % 100; // wrap around 0-99
    if (pos === 0) zeroCount++;
  }
}

console.log("Total zeros passed (Part 2):", zeroCount);
