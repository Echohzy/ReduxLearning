var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
      main:[
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './public/javascripts/app/main.jsx'
    ]},
    output: {
        path: path.resolve(__dirname, "public/build"),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        loaders: [ "babel" ],
        include: path.join(__dirname, 'public/javascripts')
        },
        {
         test: /\.js$/,
        loaders: [ "babel" ],
        },
        { test: /\.css$/,
          loaders: ["style-loader","css-loader", "postcss-loader"]
        },
        { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
          loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        }
      ],
    },
    postcss: function(){
        return [require('autoprefixer'), require('postcss-cssnext')];
    }
};