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
    const n = BigInt(parseInt(readline()));
    const value = 1n + 2n * (((n - 2n) * (n - 1n)) / 2n) + n - 1n + 4n * n;
    console.log(value.toString());
  }
}
