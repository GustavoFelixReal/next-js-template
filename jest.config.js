module.exports = {
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.svg$': '<rootDir>/jest-svg-transformer.js'
  },
  moduleNameMapper: {
    '\\.(scss|css|sass)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom',
  modulePaths: ['node_modules', '.'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.spec.tsx'],
  coverageReporters: ['lcov', 'json']
}
