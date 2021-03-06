const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: __dirname + '/',

	entry: {
		javascript: './public/app/app.js',
		html: './public/index.html'
	},

	output: {
		filename: 'app.min.js',
		path: __dirname + '/dist',
	},

	devtool: 'source-map',

	resolve: {
		extensions: ['', '.js', '.json'],
		root: path.resolve(__dirname),
	},

	htmlConfig: {
		collapseWhitespace: true
	},

	module: {
		loaders: [{
			test: /.jsx?$/,
			include: [/..\/pyritejs/, /node_modules\/pyrite/, /public/],
			loader: 'babel-loader',
			query: {
				cacheDirectory: true,
				plugins: ['transform-decorators-legacy'],
				presets: ['es2015', 'stage-0']
			}
		}, {
			test: /index\.html$/,
			loaders: ['file?name=[name].[ext]']
		}, {
			test: /.html$/,
			loaders: ['html-loader?config=htmlConfig'],
			exclude: [path.resolve(__dirname, 'public/index.html')],
		}]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.POST': process.env.PORT,
			'process.env.HOST' : JSON.stringify(process.env.HOST)
		})
	]
}