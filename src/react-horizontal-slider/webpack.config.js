var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    alias: {
      // adjust this path as needed depending on where your webpack config is
      'styled-components': path.resolve('./node_modules/styled-components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }, {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
       },
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};