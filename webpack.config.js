const path = require('path');

module.exports = {
		entry:{
			//connection: './routes/configs.js',
		indexed: './routes/index.js',
		users:'./routes/users.js',
		},
			
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist'),
		},
		module: {
			rules: [{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}]
		},
		mode: 'development'
	};