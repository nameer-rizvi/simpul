const pkg = require("./package.json");
const readline = require("readline");
const { execFileSync } = require("child_process");

const RANGE_PREFIXES = ["^", "~"];

const devPkgs = Object.entries(pkg.devDependencies || {})
  .filter((i) => RANGE_PREFIXES.includes(i[1].charAt(0)))
  .map((i) => i[0]);

const prodPkgs = Object.entries(pkg.dependencies || {})
  .filter((i) => RANGE_PREFIXES.includes(i[1].charAt(0)))
  .map((i) => i[0]);

const removePkgs = [...new Set([...devPkgs, ...prodPkgs])];

const userAgent = process.env.npm_config_user_agent || "";

const manager = (userAgent.split(" ")[0]?.split("/")[0] || "npm").toLowerCase();

const { remove, add } = {
  npm: { remove: "uninstall", add: "install" },
  yarn: { remove: "remove", add: "add" },
  pnpm: { remove: "remove", add: "add" },
}[manager];

const steps = [];

if (removePkgs.length) steps.push([remove, ...removePkgs]);

if (devPkgs.length) steps.push([add, "-D", ...devPkgs]);

if (prodPkgs.length) steps.push([add, ...prodPkgs]);

if (!steps.length) {
  console.info("⚪ Package updates not detected.");
  return;
}

try {
  process.stdout.write("🟠 Package updates in-progress...");
  for (const args of steps) {
    execFileSync(manager, args, {
      stdio: ["ignore", "pipe", "pipe"],
      encoding: "utf8",
      maxBuffer: 10 * 1024 * 1024,
    });
  }
  clearStatusLine();
  console.info("🟢 Package updates success.");
} catch (err) {
  clearStatusLine();
  console.error(`🔴 Package updates failed ("${err}").`);
  if (err?.stdout) console.error(String(err.stdout).trim());
  if (err?.stderr) console.error(String(err.stderr).trim());
}

function clearStatusLine() {
  if (!process.stdout.isTTY) return;
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
}
