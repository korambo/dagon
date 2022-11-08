const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'bundle.min.js',
    },
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 666,
        allowedHosts: 'all',
        static: {
            directory: path.join(__dirname, '../'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // filename: '../index.html',
        }),
    ],
};
