const formattedTimestamp = require("./formattedTimestamp");
const { isString, isArray, isObject } = require("./validations");

module.exports = (param) => {
  const timestamp = `[${formattedTimestamp()}]`;
  const environment = process.env.NODE_ENV && `[${process.env.NODE_ENV}]`;
  const extractObject = (object) =>
    Object.keys(object)
      .map((key) => {
        const emoji =
          key === "s" || key === "success" || key === "ok"
            ? "✅"
            : key === "e" || key === "error" || key === "err"
            ? "❌"
            : key === "w" || key === "warning"
            ? "⚠️ "
            : key === "t" || key === "time" || key === "wait"
            ? "⌛"
            : null;
        const objectLog = extractor(object[key]);
        return [emoji, objectLog].filter(Boolean).join(" ");
      })
      .filter(Boolean)
      .join(" ");
  const extractArray = (array) =>
    array
      .map(extractor)
      .filter(Boolean)
      .join(" ");
  const extractor = (data) =>
    isString(data)
      ? data
      : isObject(data)
      ? extractObject(data)
      : isArray(data)
      ? extractArray(data)
      : "";
  const log = extractor(param);
  console.log([timestamp, environment, log].filter(Boolean).join(" "));
};
