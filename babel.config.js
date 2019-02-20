module.exports = {
  plugins: ['@babel/plugin-transform-flow-strip-types'],
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
};
