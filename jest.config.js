/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const config = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "node",
  testMatch: ["**/__tests__/*.test.js"],
  forceExit: true,
  coveragePathIgnorePatterns: ["/node_modules/"],
};

export default config;
