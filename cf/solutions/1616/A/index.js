"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString = "";
let currentLine = 0;
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
  main();
});
function readline() {
  return inputString[currentLine++];
}

function main() {
  //code here
  //debug using node <filename>.js < input.txt
  const numCases = parseInt(readline());
  for (let i = 0; i < numCases; i++) {
    const n = parseInt(readline());
    const ints = readline().split(" ").map(Number);

    const unique = new Set();
    const doubles = new Set();
    for (let i = 0; i < n; i++) {
      if (unique.has(ints[i])) {
        doubles.add(ints[i]);
      } else {
        unique.add(ints[i]);
      }
    }

    const d = [...doubles];
    for (const k of d) {
      if (!unique.has(-1 * k)) {
        unique.add(-1 * k);
      }
    }

    console.log(unique.size);
  }
}
