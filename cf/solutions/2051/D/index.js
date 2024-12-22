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

function binSearchlte(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

function binSearchgte(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function main() {
  //code here
  const numCases = readInt();
  for (let i = 0; i < numCases; i++) {
    const [n, x, y] = readIntArr();
    const ints = readIntArr();
    const sum = ints.reduce((acc, curr) => acc + curr, 0);
    const freq = {};
    for (let k = 0; k < n; k++) {
      if (!freq[ints[k]]) freq[ints[k]] = 0;
      freq[ints[k]]++;
    }
    const unique = Object.keys(freq).map(Number);
    unique.sort((a, b) => a - b);

    const uniqueVals = [];
    for (let k = 0; k < unique.length; k++) {
      uniqueVals.push(freq[unique[k]]);
    }

    const prefixSums = [];
    let prefixSum = 0;
    for (let k = 0; k < unique.length; k++) {
      prefixSum += uniqueVals[k];
      prefixSums.push(prefixSum);
    }

    const biggest = unique[unique.length - 1];
    const smallest = unique[0];

    let ok = 0;
    for (let first = 0; first < unique.length; first++) {
      const firstNum = unique[first];

      if (sum - firstNum < x) {
        continue;
      }

      let lowerBound = Math.max(sum - firstNum - y, smallest);
      const upperBound = Math.min(sum - firstNum - x, biggest);

      //if it just so happens that firstNum + firstNum is in the range
      if (firstNum >= lowerBound && firstNum <= upperBound) {
        //n choose 2
        ok += (uniqueVals[first] * (uniqueVals[first] - 1)) / 2;
      }

      lowerBound = Math.max(lowerBound, firstNum + 1);

      const lte = binSearchlte(unique, upperBound);
      const gte = binSearchgte(unique, lowerBound);

      if (lte < gte) {
        continue;
      }

      const rangeSum = prefixSums[lte] - (gte > 0 ? prefixSums[gte - 1] : 0);
      ok += rangeSum * uniqueVals[first];
    }

    cl(ok);
  }
}
