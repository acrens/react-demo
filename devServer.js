const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const port = 8888;

for (const entry in config.entry) {
    if (entry === 'vendor') {
        continue;
    }

    config.entry[entry].unshift(
      `webpack-dev-server/client?http://localhost:${port}/`,
      'webpack/hot/only-dev-server'
    );
}

const server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname, // webpack-dev-server 服务目录为根目录
    quiet: false,
    noInfo: false, // 编译是否不显示编译信息
    hot: false, // 热更新或者刷新页面
    inline: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
});

server.listen(port || 8888);
