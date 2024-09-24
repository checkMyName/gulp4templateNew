import {isProduction} from '../index';

const path                      = require('path');
const TerserPlugin              = require('terser-webpack-plugin');

module.exports = {
	entry: {
		main: './src/js/main.js'
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: '/'
	},
	cache: {
		type: 'filesystem',
		allowCollectingMemory: true,
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				defaultVendors: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendors',
					enforce: true
				}
			}
		},
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          }
        },
      }),
    ],
	}
};