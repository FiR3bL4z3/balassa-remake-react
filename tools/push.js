const { exec } = require("shelljs");
const { logTree } = require("./updateReadme");

logTree();
exec("git add .");
exec('git commit -m "Testing push tool"');
exec("git push");
