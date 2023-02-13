const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
const {
  resolver: { sourceExts, assetExts },
} = config;

config.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer'
);
config.resolver.assetExts = assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...sourceExts, 'svg'];

module.exports = config;

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//     ...restConfig
//   } = await getDefaultConfig(__dirname);
//   return {
//     ...restConfig,
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter((ext) => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//   };
// })();
