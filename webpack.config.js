const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
	disable: process.env.NODE_ENV === 'development'
});

const VENDOR_LIBS = ['react', 'react-dom', 'react-router', 'react-router-dom'];

module.exports = {
	entry: {
		bundle: ['babel-polyfill', './src/index.js'],
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '',
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: [path.resolve(__dirname, 'src')],
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract([
					'css-loader',
					'postcss-loader',
					'sass-loader'
				])
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'file-loader'
					},
					{
						loader: 'image-webpack-loader',
						query: { bypassOnDebug: true }
					}
				]
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [autoprefixer]
			}
		}),
		extractSass
	]
};
