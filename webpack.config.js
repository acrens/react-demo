const path = require('path');
const webpack = require('webpack');
const publicPath = 'http://localhost:8888/assets/';

module.exports = {
    entry: {
        // vendor: [
        //     'react',
        //     'react-dom'
        // ],
        helloworld : ['./src/helloworld.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',

        // webpack-dev-server 开发环境打包至内存的资源文件目录
        publicPath: publicPath
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // names: ['vendor', 'manifest'],
            minChunks: function (module) {
               // 该配置假定你引入的 vendor 存在于 node_modules 目录中
               return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
    ],

    // webpack-dev-server config
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 8888,
        publicPath: publicPath,
        hot: true,
        hotOnly: true,
        inline: true,
        noInfo: false,
        quiet: false,
        stats: {
            colors: true
        },
        watchContentBase: true  // 是否开启hot页面刷新
    }
}
