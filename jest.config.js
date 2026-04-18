/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "client/components/**/*.{js,jsx}",
    "client/store/**/*.{js,jsx}",
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "test-utils.js",
  ],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 79,
      lines: 88,
      statements: 85,
    },
    'client/store': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    'client/components/Voting': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },

  // The test environment that will be used for testing
  testEnvironment: "jest-environment-jsdom",
};

module.exports = config;
