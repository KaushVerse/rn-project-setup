module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@features': './src/features',
            '@navigation': './src/navigation',
            '@components': './src/components',
            '@unistyles': './src/unistyles',
            '@services': './src/services',
            '@states': './src/states',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@styles': './src/styles',
            '@api': './src/api',
            '@store': './src/store',
            '@screens': './src/screens',
            '@types': './src/types',
            '@config': './src/config',
            '@theme': './src/theme',
            '@constants': './src/constants',
            '@context': './src/context',
            '@graphql': './src/graphql',
            '@locales': './src/locales',
            '@data': './src/data',
            '@storage': './src/storage',
            '@libs': './src/libs',
            '@interfaces': './src/interfaces'
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
