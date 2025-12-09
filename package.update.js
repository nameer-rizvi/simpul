const packageJson = require("./package.json");
const { execSync } = require("child_process");

const manager = process.env.npm_config_user_agent.split("/")[0];

const instructions = [
  {
    action: manager === "yarn" ? "remove" : "uninstall",
    types: ["devDependencies", "dependencies"],
  },
  {
    action: manager === "yarn" ? "add" : "install",
    types: ["devDependencies"],
    flag: "-D",
  },
  {
    action: manager === "yarn" ? "add" : "install",
    types: ["dependencies"],
  },
];

function mapper(instruction) {
  const names = [];
  for (const type of instruction.types) {
    for (const [name, version] of Object.entries(packageJson[type] || {})) {
      if (version.startsWith("^") || version.startsWith("~")) {
        names.push(name);
      }
    }
  }
  if (names.length) {
    if (instruction.flag) names.push(instruction.flag);
    return [manager, instruction.action, ...names].join(" ");
  }
}

const commands = instructions.map(mapper).filter(Boolean);

if (commands.length) {
  try {
    process.stdout.write("🟠 Package updates in-progress...");
    execSync(commands.join(" && "));
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    console.info("🟢 Package updates success.");
  } catch {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    console.error("🔴 Package updates failed.");
  }
} else {
  console.info("⚪ Package updates not detected.");
}
