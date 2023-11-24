const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',

    output: {
        filename: 'main.[fullhash].js',
        path: path.resolve(__dirname, 'docs'),
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(png|ico|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
        port: 3000,
        compress: true,
        historyApiFallback: true,
        hot: false
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ly NGUYEN',
            template: './src/index.ejs',
            publicPath: '/',
            hash: true
        })
    ]
};