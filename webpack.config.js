"use strict";
var path = require('path');

module.exports = {
    context: __dirname,
    entry: "./src/server.js",
    output: {
        path: path.resolve(__dirname),
        filename: "./dist/server.js"
    },
    module: {
        rules: [
        {
            test: [/\.jsx?$/],
            exclude: /(node_modules)/,
            use: {
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react']
            }
            },
        }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    node: {
        fs: "empty",
        net: "empty"
     }
};