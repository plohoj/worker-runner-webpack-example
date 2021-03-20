const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const publicPath = '';

/** @type {import('webpack').RuleSetRule['use']} */
const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: [
            ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: 3,
            }],
        ],
    },
};

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/scripts/main.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    babelLoader, // For IE11
                    'ts-loader',
                ]
            },
            // <------ For IE11
            {
                test: /\.js$/,
                exclude: {
                    and: [
                        /node_modules/,
                        { not: [/node_modules[\\/]@worker-runner/] },
                    ]
                },
                use: babelLoader,
            }
            // ------>
        ],
    },
    target: ['web', 'es5'], // For IE11
    resolve: {
        extensions : ['.js', '.ts'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /src[\\/]scripts[\\/]common/,
                    minSize: 0,
                    chunks: 'all',
                },
            },
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head',
        }),
        // <------ For IE11
        new webpack.BannerPlugin({
            raw: true,
            banner: `if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.Promise === "undefined") {
                importScripts("${publicPath}/polyfill/es6-promise.auto.js");
            }`,
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: "./node_modules/es6-promise/dist/es6-promise.auto.js", to: "./polyfill/es6-promise.auto.js" },
            ],
        }),
        // ------>
    ],
};
