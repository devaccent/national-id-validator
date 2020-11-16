const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: "production",
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build'),
		library: 'national-id-validator',
		libraryTarget: 'umd'
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			extractComments: false
		})],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
		]
	},
	plugins: []
};
