module.exports = {
  testEnvironment: 'jsdom', // Ensure jest-environment-jsdom is used
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transform-stub',
    '^.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css', // Use identity-obj-proxy for CSS files
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Map CSS files to identity-obj-proxy
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  testMatch: ['**/tests/**/*.test.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!(react-router-dom)/)', // Add this line to handle ES modules
  ],
  moduleDirectories: ['node_modules', 'src'], // Add this line to help Jest resolve modules
};