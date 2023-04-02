/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  setupFiles: [
    '<rootDir>/.jest-setup.js',
  ],
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
