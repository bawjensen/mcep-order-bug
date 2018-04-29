const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'output-one': './entry-one.js',
        'output-two': './entry-two.js',
    },
    output: {
        filename: '[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // CSS output files have incorrect ordering
                    // 'style-loader', // With style-loader, CSS is injected in correct order
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    devtool: false,
};
