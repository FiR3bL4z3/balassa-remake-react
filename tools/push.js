const { exec } = require("shelljs");
const { argv } = require("process");
const readlineSync = require("readline-sync");

let commitMessage;
if (argv.length <= 2) {
  commitMessage = readlineSync.question("Commit message: ");
}

exec("git add .");
exec(`git commit -m "${commitMessage}"`);
exec("git push");
