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
  const [d, sumTime] = readIntArr();
  const limits = [];
  let minSum = 0;
  let maxSum = 0;
  for (let i = 0; i < d; i++) {
    const [min, max] = readIntArr();
    limits.push([min, max]);
    minSum += min;
    maxSum += max;
  }

  if (sumTime < minSum || sumTime > maxSum) {
    cl("NO");
    return;
  }

  let overflow = sumTime - minSum;
  const values = [];
  for (let i = 0; i < d; i++) {
    const [min, max] = limits[i];
    const extra = Math.min(max - min, overflow);
    overflow -= extra;
    values.push(min + extra);
  }
  cl("YES");
  cl(values.join(" "));
}
