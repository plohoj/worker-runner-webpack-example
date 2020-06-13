const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkerInjectorGeneratorPlugin = require("worker-injector-generator-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: {
        'app': './src/scripts/main.ts',
        'worker': './src/scripts/worker.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            { // For ECMAScript modules to work
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
            }
        ],
    },
    resolve: {
        extensions : ['.js', '.ts']
    },
    optimization: {
        splitChunks: { // Configuration for a common chunk between worker and main area
            cacheGroups: {
              commons: {
                name: 'commons',
                minChunks: 2,
                chunks: 'initial',
              },
            }
        }
    },
    output: {filename: '[name].js'},
    plugins: [
        new WorkerInjectorGeneratorPlugin({ // For a common chunk between worker and main area
            name: "worker-injector.js",
            importScripts: [
              "commons.js",
              "worker.js",
            ],
          }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            excludeChunks: ['worker'],
            inject: 'head',
        }),
    ],
    devtool: 'source-map',
    devServer: {
        port: 3400,
    },
};
