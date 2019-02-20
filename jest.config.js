module.exports = {
  preset: 'react-native',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation)',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.{ts|tsx}', '!**/node_modules/**'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  setupTestFrameworkScriptFile: '<rootDir>/testSetup.ts',
};
