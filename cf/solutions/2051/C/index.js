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
    const [n, m, k] = readIntArr();
    const mInts = readIntArr();
    const kInts = readIntArr();

    //if k < n-1, he has no chance of passing
    if (k < n - 1) {
      cl("0".repeat(m));
      continue;
    }

    //if k = n, he'll pass everything
    if (k === n) {
      cl("1".repeat(m));
      continue;
    }

    let kIntsSort = [...kInts].sort((a, b) => a - b);
    let missing = -1;
    for (let k = 0; k < n; k++) {
      if (kIntsSort[k] !== k + 1) {
        missing = k + 1;
        break;
      }
    }

    let outstr = "";
    for (let j = 0; j < n; j++) {
      if (missing === mInts[j]) {
        outstr += "1";
      } else {
        outstr += "0";
      }
    }
    cl(outstr);
  }
}
