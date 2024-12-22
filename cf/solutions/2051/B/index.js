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
    const [n, a, b, c] = readIntArr();

    const compCycleLen = a + b + c;
    const compCycles = Math.floor(n / compCycleLen);
    const rem = n % compCycleLen;
    if (rem == 0) {
      console.log(compCycles * 3);
    } else if (rem <= a) {
      console.log(compCycles * 3 + 1);
    } else if (rem <= a + b) {
      console.log(compCycles * 3 + 2);
    } else {
      console.log(compCycles * 3 + 3);
    }
  }
}
