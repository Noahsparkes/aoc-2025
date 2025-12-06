import { readFileSync } from "fs";
import { join } from "path";

// Read the input file
const input = readFileSync(join(__dirname, "input.txt"), "utf8").trim();

// Split into lines
const lines = input.split(/\r?\n/).filter(Boolean); // works for Windows/macOS line endings

// State
let pos = 50;
let zeroCount = 0;

for (const line of lines) {
  const dir = line[0];              // "L" or "R"
  const dist = Number(line.slice(1)); // the number portion

  if (isNaN(dist)) continue;       // sanity check

  // Apply rotation
  if (dir === "L") {
    pos -= dist;
  } else {
    pos += dist;
  }

  // Wrap around the 0–99 circle
  pos = ((pos % 100) + 100) % 100;

  // Count zeros
  if (pos === 0) {
    zeroCount++;
  }
}

console.log("Zeros landed on:", zeroCount);
