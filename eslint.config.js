const eslintjs = require("@eslint/js");
const globals = require("globals");

const eslintconfig = [
  eslintjs.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2021,
      },
    },
    rules: {
      "no-empty": 0,
      "no-inner-declarations": 0,
    },
  },
];

module.exports = eslintconfig;
