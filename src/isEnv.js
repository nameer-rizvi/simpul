const isEnvDevelopment =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev";

const isEnvTest = process.env.NODE_ENV === "test";

const isEnvStaging =
  process.env.NODE_ENV === "staging" || process.env.NODE_ENV === "stage";

const isEnvProduction =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";

module.exports = {
  development: isEnvDevelopment,
  test: isEnvTest,
  staging: isEnvStaging,
  production: isEnvProduction,
  live: isEnvStaging || isEnvProduction,
  name: process.env.NODE_ENV,
};
