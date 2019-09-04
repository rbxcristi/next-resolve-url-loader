module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        );
      }

      config.module.rules.push(
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'resolve-url-loader'
            }
          ]
        },
        {
          test: /\.sass$/,
          use: {
            loader: 'resolve-url-loader'
          }
        }
      );

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
};
