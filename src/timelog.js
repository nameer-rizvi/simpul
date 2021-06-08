function timelog(log = "") {
  if (log && log.toString) log = log.toString();

  if (process.env.NODE_ENV) log = `[${process.env.NODE_ENV}] ${log}`;

  const localeDateString = new Date().toLocaleString().replace(/,/g, "");

  log = `[${localeDateString}] ${log}`;

  console.log(log);
}

module.exports = timelog;
