const isEnvDevelopment =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev";

const isEnvStaging =
  process.env.NODE_ENV === "staging" ||
  process.env.NODE_ENV === "stage" ||
  process.env.NODE_ENV === "stag";

const isEnvProduction =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";

module.exports = {
  development: isEnvDevelopment,
  staging: isEnvStaging,
  production: isEnvProduction,
  live: isEnvStaging || isEnvProduction,
  name: process.env.NODE_ENV,
};
