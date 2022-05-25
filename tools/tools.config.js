const chalk = require("chalk");

const startStyle = chalk.bgHex("#FFA500").black.bold;
const warningStyle = chalk.bgYellow.black.bold;
const errorStyle = chalk.bgRed.bold;
const infoStyle = chalk.bgCyan.black.bold;
const successStyle = chalk.bgHex("#4bb543").bold;

const startmsg = (text) => {
  return startStyle("   START ") + " " + text + "\n";
};

const endmsg = (text) => {
  return "\n" + startStyle("     END ") + " " + text + "\n";
};

const warnmsg = (text) => {
  return warningStyle("    WARN ") + " " + text;
};

const errmsg = (text) => {
  return errorStyle("     ERR ") + " " + text;
};

const infomsg = (text) => {
  return infoStyle("    INFO ") + " " + text;
};

const successmsg = (text) => {
  return successStyle(" SUCCESS ") + " " + text;
};

if (require.main === module) {
  console.log(startmsg("tools.js starts running"));
  console.log(warnmsg("this is a warning message"));
  console.log(errmsg("this is a error message"));
  console.log(infomsg("this is an info message"));
  console.log(successmsg("this is an success message"));
  console.log(endmsg("tools.js starts running"));
}

module.exports = { warnmsg, errmsg, startmsg, infomsg, successmsg, endmsg };
