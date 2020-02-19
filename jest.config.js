module.exports = {
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'react-native',
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
    providesModuleNodeModules: ['react-native'],
  },
  setupFilesAfterEnv: ['<rootDir>/testSetup.ts', '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native-community|react-navigation|@react-navigation/.*))',
  ],
};
