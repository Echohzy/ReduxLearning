var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
      bundle:[
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './public/javascripts/main.jsx'
    ]},
    output: {
        path: path.resolve(__dirname, "public/build"),
        publicPath: '/',
        filename: '[name].js'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        {
        test: /\.js[x]$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
        { test: /\.less$/,
          loaders: ["style-loader",'css-loader','less-loader']
        },
        { test: /\.(png|jpg)$/,
          loaders: ['url?limit=25000']
        }
      ],
    },
};