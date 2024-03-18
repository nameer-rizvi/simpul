function copy(string) {
  let proc = require("child_process").spawn("pbcopy");

  proc.stdin.write(string);

  proc.stdin.end();
}

module.exports = copy;
