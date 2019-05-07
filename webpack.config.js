const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodemonPlugin = require('nodemon-webpack-plugin');

module.exports = (env = {}) => {
  const config = {
    target: 'node',
    mode: env.development ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js'
    },
    devtool: env.development ? 'cheap-eval-source-map' : false,
    resolve: {
      // tells Webpack what files to watch.
      modules: ['node_modules', 'src']
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [new CleanWebpackPlugin()]
  };

  if (env.nodemon) {
    config.watch = true;
    config.plugins.push(new nodemonPlugin());
  }

  return config;
};
