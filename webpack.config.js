const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-1']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'url-loader?limit=10000',
                  'img-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'styles.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true
}
};