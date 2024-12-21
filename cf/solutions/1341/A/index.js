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
    const [n, a, b, c, d] = readIntArr();
    const minGMass = a - b;
    const maxGMass = a + b;
    const minPMass = c - d;
    const maxPMass = c + d;

    //some preliminary checks
    if (maxPMass < minGMass * n || minPMass > maxGMass * n) {
      cl("No");
      continue;
    }

    const minPMassBound = Math.min(
      minPMass + (n - (minPMass % n)),
      minPMass % n == 0 ? minPMass : Infinity
    );
    const maxPMassBound = maxPMass - (maxPMass % n);

    const minGMassBound = minPMassBound / n;
    const maxGMassBound = maxPMassBound / n;

    //bounds check

    if (
      //fully inside
      (minGMass <= minGMassBound && maxGMass >= maxGMassBound) ||
      (minGMass >= minGMassBound && maxGMass <= maxGMassBound) ||
      //partial overlap
      (minGMass <= minGMassBound && maxGMass >= minGMassBound) ||
      (minGMass >= minGMassBound && maxGMass >= maxGMassBound)
    ) {
      cl("Yes");
    } else {
      cl("No");
    }
  }
}
