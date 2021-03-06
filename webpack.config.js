const path = require('path');
const Dotenv = require('dotenv-webpack');



module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
                options: {
                  name: 'public/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new Dotenv(),
    ]
    
}