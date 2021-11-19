const tryCallback = require("./tryCallback");

const decode = (token, callback) =>
  tryCallback(
    () =>
      decodeURIComponent(
        atob(
          token
            .split(".")[1]
            .replace(/-/g, "+")
            .replace(/_/g, "/")
        )
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      ),
    callback
  );

const decodeJSON = (token, callback) =>
  tryCallback(() => JSON.parse(decode(token, callback)), callback);

const jwt = { decode, decodeJSON };

module.exports = jwt;
