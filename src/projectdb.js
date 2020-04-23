const { writeFileSync, existsSync, readFileSync, unlinkSync } = require("fs");

const getCWD = () => {
  const cwd = process.cwd();
  return cwd && cwd.includes("/node_modules") && cwd.split("/node_modules")[0];
};

const dir = process.env.PROJECTDB_PATH || process.env.PWD || getCWD();

const filepath = dir && `${dir}/db.txt`;

const errorLog = (msg) => console.log(`\n[PROJECTDB] ERROR: ${msg}.\n`);

const errorBoundary = (fn) =>
  filepath ? fn() : errorLog("Can't find project's root folder");

exports.set = (data) =>
  errorBoundary(() =>
    writeFileSync(
      filepath,
      JSON.stringify(
        data &&
          Boolean(data.constructor === Array || data.constructor === Object)
          ? data
          : []
      ),
      (err) => err && errorLog(err.message)
    )
  );

exports.get = () =>
  errorBoundary(() =>
    existsSync(filepath) ? JSON.parse(readFileSync(filepath, "utf8")) : []
  );

exports.add = (newData) =>
  errorBoundary(
    () =>
      existsSync(filepath) &&
      newData &&
      (() => {
        const db = exports.get();
        db.constructor === Object && newData.constructor === Object
          ? exports.set({ ...db, ...newData })
          : db.constructor === Array && exports.set([...db, newData]);
      })()
  );

exports.delete = () =>
  errorBoundary(() => existsSync(filepath) && unlinkSync(filepath));
