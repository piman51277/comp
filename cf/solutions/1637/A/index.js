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
    const arr = readIntArr();

    let ok = false;
    for (let len = 1; len <= n - 1; len++) {
      const lMax = Math.max(...arr.slice(0, len));
      const rMin = Math.min(...arr.slice(len));

      if (lMax > rMin) {
        ok = true;
        break;
      }
    }

    if (ok) {
      cl("YES");
    } else {
      cl("NO");
    }
  }
}
