const readline = require("node:readline");
const fs = require("node:fs");
const path = require("node:path");
const { exec } = require("node:child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function prompt(query) {
  return new Promise((res) => {
    rl.question(query, res);
  });
}

async function promptValidate(query, validator) {
  let response = await prompt(query);
  while (!validator(response)) {
    console.log("Invalid input");
    response = await prompt(query);
  }
  return response;
}

async function main() {
  // This should match 0123A
  const reg = /^([0-9]{1,5})([A-Z][0-9]?)$/;
  let pid = await promptValidate("Enter problem id: ", (n) => reg.test(n));
  const [id, subproblem] = pid.match(reg).slice(1);

  const problemPath = path.join(__dirname, `../solutions/${id}/${subproblem}`);
  if (fs.existsSync(problemPath)) {
    let confirm = await prompt(
      `Problem ${id}${subproblem} already exists. Overwrite? (y/n): `
    );

    if (confirm !== "y") {
      rl.close();
      return;
    } else {
      fs.rmSync(problemPath, { recursive: true });
    }
  }
  fs.mkdirSync(problemPath, { recursive: true });

  const template = fs.readFileSync(
    path.join(__dirname, "../templates/nodejs.js"),
    "utf-8"
  );
  fs.writeFileSync(`${problemPath}/index.js`, template);
  fs.writeFileSync(`${problemPath}/input.txt`, "");

  const runScript = fs.readFileSync(
    path.join(__dirname, "./scripts/run_nodejs.sh"),
    "utf-8"
  );
  fs.writeFileSync(`${problemPath}/run.sh`, runScript);

  const cleanupScript = fs.readFileSync(
    path.join(__dirname, "./scripts/cleanup.sh"),
    "utf-8"
  );
  fs.writeFileSync(`${problemPath}/cleanup.sh`, cleanupScript);

  exec(`code ${problemPath} -r`);

  rl.close();
}
main();
