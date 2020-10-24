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
                exclude: /node_modules/,
                use: [
                    // <------ For IE11
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                }],
                            ],
                        },
                    },
                    // ------>
                    'ts-loader',
                ]
            },
            // <------ For IE11
            {
                test: /\.js$/,
                exclude: /node_modules[\\\/](?!@worker-runner)/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                useBuiltIns: 'usage',
                                corejs: 3,
                            }],
                        ],
                    },
                },
            }
            // ------>
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
    devtool: 'inline-source-map',
    devServer: {
        port: 3400,
    },
};
