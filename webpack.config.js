
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index:'./src/index.js',
        dateRange:'./src/DateRange.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /(.scss|.css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    devServer:{
        port: 8081,
        contentBase: path.join(__dirname, 'dist'),
        watchOptions: {
            hot: true,
            watchContentBase: true,
            poll: true
        }
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'})
    ]
}
