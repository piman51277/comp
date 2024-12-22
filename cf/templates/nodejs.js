"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
let _istrs = "";
let _curr = 0;
process.stdin.on("data", (stdin) => {
  _istrs += stdin;
});
process.stdin.on("end", (_) => {
  _istrs = _istrs
    .trim()
    .split("\n")
    .map((str) => {
      return str.trim();
    });
  main();
});
function readline() {
  return _istrs[_curr++];
}
const readInt = () => parseInt(readline());
const readIntArr = () => readline().split(" ").map(Number);
const cl = console.log;

function main() {
  //code here
  const numCases = readInt();
  for (let _case = 0; _case < numCases; _case++) {
    //...
  }
}
