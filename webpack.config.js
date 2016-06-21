var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname,'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
module.exports = {
  entry: [
    './assets/javascripts/main.js'
    ],
  output: {
    path: path.resolve(__dirname,'assets/build'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
   new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js[x]?$/, 
        include: path.resolve(__dirname, 'app'), 
        exclude: /node_modules/, 
        loaders: ['babel']
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