const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin') //creates index.html

module.exports = {

    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, './src/server/public'),
        filename: 'frontend_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/client/index.html'
        })
    ]
}