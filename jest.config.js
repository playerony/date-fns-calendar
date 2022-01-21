const mapPathsFromTsConfig = require('jest-module-name-mapper').default;

module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: './tsconfig.json',
    },
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/infrastructure/jest/setup-tests.ts'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|styl|less|sass|scss)$': '<rootDir>/__mocks__/style-mock.js',
    ...mapPathsFromTsConfig(),
  },
  modulePathIgnorePatterns: ['node_modules'],
};
