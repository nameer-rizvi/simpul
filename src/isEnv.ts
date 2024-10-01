const isEnvDevelopment: boolean =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev";

const isEnvTest: boolean = process.env.NODE_ENV === "test";

const isEnvStaging: boolean =
  process.env.NODE_ENV === "staging" || process.env.NODE_ENV === "stage";

const isEnvProduction: boolean =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";

export default {
  development: isEnvDevelopment,
  test: isEnvTest,
  staging: isEnvStaging,
  production: isEnvProduction,
  live: isEnvStaging || isEnvProduction,
  name: process.env.NODE_ENV as string | undefined, // Environment variable could be undefined
};
