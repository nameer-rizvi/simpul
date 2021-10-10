const isEnvDevelopment =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev";

const isEnvStaging =
  process.env.NODE_ENV === "staging" || process.env.NODE_ENV === "stage";

const isEnvProduction =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";

const isEnvLive = isEnvStaging || isEnvProduction;

const isEnv = {
  development: isEnvDevelopment,
  staging: isEnvStaging,
  production: isEnvProduction,
  live: isEnvLive,
};

module.exports = isEnv;
