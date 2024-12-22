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
const readInt = () => parseInt(readline());
const readIntArr = () => readline().split(" ").map(Number);
const cl = console.log;

function main() {
  //code here
  const numCases = readInt();
  for (let i = 0; i < numCases; i++) {
    const n = readInt();
    const aInts = readIntArr();
    const bInts = readIntArr();

    let max = aInts[n - 1]; //no downside to training on the last day

    for (let k = 0; k < n - 1; k++) {
      const a = aInts[k];
      const b = bInts[k + 1];

      //only train if it makes a difference
      if (a > b) {
        max += a - b;
      }
    }

    cl(max);
  }
}
