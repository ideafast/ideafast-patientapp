module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'inline-import',
      {
        extensions: ['.md'],
      },
    ],
  ],
};
