module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
    ],
    plugins: [
      ['babel-plugin-root-import', {
        paths: [
          {
            root: __dirname,
            rootPathPrefix: '~/',
            rootPathSuffix: 'src',
          }
        ]
      }],
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true
      }]
    ]
  };
};
