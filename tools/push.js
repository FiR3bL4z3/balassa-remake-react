const { exec } = require("shelljs");
const { argv } = require("process");
const readlineSync = require("readline-sync");
const { startmsg, infomsg, successmsg, endmsg } = require("./tools.config.js");

console.log(startmsg("tools/push.js"));
let commitMessage;
if (argv.length <= 2) {
  commitMessage = readlineSync.question(infomsg("Commit message: "));
}

exec("git add .");
exec(`git commit -m "${commitMessage}"`);
exec("git push");

console.log(successmsg("Chaneges successfully commited!"));
console.log(endmsg("tools/push.js"));
