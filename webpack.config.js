const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin()
    ]
};