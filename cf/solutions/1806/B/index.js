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

    let numZeros = 0;
    let numOnes = 0;
    let aboveOne = false;
    for (const k of ints) {
      if (k == 0) numZeros++;
      else if (k == 1) numOnes++;
      else {
        aboveOne = true;
      }
    }

    if (numZeros <= Math.ceil(n / 2)) {
      console.log(0);
    } else if (numOnes == 0 || aboveOne) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}
