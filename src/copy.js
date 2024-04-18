const support = require("./support");

function copy(string) {
  if (support.module("child_process")) {
    const proc = require("child_process").spawn("pbcopy");

    proc.stdin.write(string);

    proc.stdin.end();
  }
}

module.exports = copy;
