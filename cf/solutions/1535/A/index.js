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
    const [s1, s2, s3, s4] = readline().split(" ").map(Number);

    const [best, second, _, __] = [s1, s2, s3, s4].sort((a, b) => b - a);
    const p1 = Math.max(s1, s2);
    const p2 = Math.max(s3, s4);
    const f = Math.max(p1, p2);
    const s = Math.min(p1, p2);
    if (f == best && s == second) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
