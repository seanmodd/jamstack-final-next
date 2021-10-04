const withTM = require('next-transpile-modules')([
  'three',
  '@react-three/drei',
  'three',
  'react-three-fiber',
  'drei',
]);

module.exports = {
  webpack(config) {
    config.module.rules.push({
      // test: /\.svg$/,
      // use: ['@svgr/webpack'],
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
  async getRedirectStatus() {
    return [];
  },
};
// const withTM = require('next-transpile-modules')([
//   'three',
//   'react-three-fiber',
//   'drei',
// ]);

// module.exports = withTM({
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.(glb|gltf)$/,
//       use: {
//         loader: 'file-loader',
//       },
//     });

//     return config;
//   },
// });
