module.exports = {
  roots: ['<rootDir>/src'],
  coverageDirectory: '.reports',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/*.(ts|tsx)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**',
    '!**src/**/*.d.ts'
  ],
};
