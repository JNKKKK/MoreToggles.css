const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './docs-src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        allowedHosts: 'all',
        static: {
            directory: path.join(__dirname, 'docs'),
        },
    },
    plugins: [
    ],
    target: 'web',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs'),
        clean: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                exclude: [/node_modules/],
            }
        ],
    },
};