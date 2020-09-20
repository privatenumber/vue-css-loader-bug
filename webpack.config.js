const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

	mode: 'production',

	optimization: {
		minimize: false,
	},

	entry: './src/main.js',

	output: {
		filename: '[name].js',
		path: path.resolve('dist'),
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: {
							// css-loader set esModule: true as the default in v4.0.0
							// https://github.com/webpack-contrib/css-loader/releases/tag/v4.0.0
							// Doesn't work unless this disabled
							// esModule: false
						}
					},
				]
			},
		]
	},

	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			templateContent: `
			<html>
			<body>
				<div id="app"></div>
			</body>
			</html>
			`
		}),
	],
};
