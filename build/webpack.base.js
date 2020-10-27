const { resolve } = require('path')
const path = require('path')

const VueloaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-Webpack-Plugin')
const { CleanWebpackPlugin } = require('clean-Webpack-Plugin')

module.exports = {
    //入口和出口
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    },
    //打包规则
    module: {
        rules: [{
            test: /\js$/,
            exclude: /node_modules/,
            loader: "babel-loader" //将ES6的语法转换为ES5
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(jpg|jpeg|png|svg)/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 2048
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.styl(us)?$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
        }]
    },
    //插件
    plugins: [
        new VueloaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            'styles': path.resolve(__dirname, '../src/assets/styles'),
            'images': path.resolve(__dirname, '../src/assets/images')
        }
    }
}