const readline = require("node:readline");
const fs = require("node:fs");
const path = require("node:path");
const { exec } = require("node:child_process");

/**
 * Config Start
 */

const langConfigs = {
  js: {
    templatePath: "../templates/nodejs.js",
    templateName: "index.js",
    runScriptPath: "./scripts/run_nodejs.sh",
  },
};
const validLangs = Object.keys(langConfigs);

/**
 * Config End
 */

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

function generateCommitScript(id, subproblem) {
  let script = [
    `git reset`,
    `git add .`,
    `git commit -m "solution ${id}${subproblem}"`,
  ];
  return script.join("\n");
}

async function main() {
  // This should match 0123A
  const reg = /^([0-9]{1,5})([A-Z][0-9]?)$/;
  let pid = await promptValidate("Enter problem id: ", (n) => reg.test(n));
  const [id, subproblem] = pid.match(reg).slice(1);

  const lang = await promptValidate(
    `Enter Lang\n One of (${validLangs.join(" ")}): `,
    (n) => validLangs.includes(n)
  );

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

  fs.writeFileSync(`${problemPath}/input.txt`, "");

  const cleanupScript = fs.readFileSync(
    path.join(__dirname, "./scripts/cleanup.sh"),
    "utf-8"
  );
  fs.writeFileSync(`${problemPath}/done.sh`, cleanupScript);
  fs.writeFileSync(
    `${problemPath}/commit.sh`,
    generateCommitScript(id, subproblem)
  );

  const { templatePath, runScriptPath, templateName } = langConfigs[lang];

  const template = fs.readFileSync(path.join(__dirname, templatePath), "utf-8");
  const runScript = fs.readFileSync(
    path.join(__dirname, runScriptPath),
    "utf-8"
  );
  fs.writeFileSync(`${problemPath}/${templateName}`, template);
  fs.writeFileSync(`${problemPath}/run.sh`, runScript);

  exec(
    `xdg-open https://codeforces.com/problemset/problem/${id}/${subproblem}`
  );
  exec(`code ${problemPath} -r`);

  rl.close();
}
main();
