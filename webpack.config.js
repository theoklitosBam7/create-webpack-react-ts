const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = {
  distPath: path.resolve(__dirname, 'dist'),
  srcPath: path.resolve(__dirname, 'src'),
  imgPath: path.resolve(__dirname, 'src', 'images'),
};

module.exports = (env, options) => {
  const isDev = options.mode === 'development';

  return {
    mode: options.mode,
    devtool: isDev ? 'eval-source-map' : false,
    devServer: {
      contentBase: './dist',
      port: 8080,
      liveReload: true,
      open: true,
    },
    entry: path.resolve(paths.srcPath, 'index.tsx'),
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(paths.srcPath, 'index.html'),
        favicon: path.resolve(paths.imgPath, 'favicon.ico'),
      }),
    ],
    output: {
      filename: isDev ? '[name].bundle.js' : '[name].[contenthash].js',
      path: path.resolve(paths.distPath),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: isDev ? '[path][name].[ext]' : '[contenthash].[ext]',
            },
          },
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'],
    },
  };
};
