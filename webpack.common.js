const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const cssDev = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
})
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '/public'
})

const cssConfig = isProd ? cssProd : cssDev

module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    // plugins: [
    //     new ExtractTextPlugin('app.css')
    // ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        alias: {
            modules: __dirname + '/node_modules/'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.sass$/,
            use: cssConfig
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        // new ExtractTextPlugin('style.css')
        //if you want to pass in options, you can do so:
        new ExtractTextPlugin({
            filename: 'app.css'
        })
    ]
};
