// process.env.NODE_ENV = "production";

var debug               = process.env.NODE_ENV !== "production";
var path                = require("path");
var webpack             = require("webpack");
var copyWebpackPlugin   = require("copy-webpack-plugin");
var ExtractTextPlugin   = require("extract-text-webpack-plugin");
var autoprefixer        = require("autoprefixer");

var config = function(){

  var autoprefix        = "last 3 versions";
  var jsQueries         = {
                            presets: [ "react", "es2015", "stage-0" ],
                            plugins: [ "react-html-attrs", "add-module-exports", "transform-class-properties" ]
                          };
  var cssLoaders        = ["css-loader" + ((debug) ? "" : "?minimize"), "postcss-loader"];
  var scssLoaders       = cssLoaders.slice(0);
                          scssLoaders.push("sass-loader");
  var lessLoaders       = cssLoaders.slice(0);
                          lessLoaders.push("less-loader");
  var plugins           = [
                            new ExtractTextPlugin("assets/css/[name].min.css"),
                            new copyWebpackPlugin([{ context: "src", from: "./assets/content/**/*", to: "./" }], { ignore: [] })
                          ];
  var debugPlugins      = [
                            new copyWebpackPlugin([{ context: "dist", from: "./**/*", to: "../test" }], { ignore: [] })
                          ];
  var prodPlugins       = [
                            new webpack.optimize.DedupePlugin(),
                            new webpack.optimize.OccurenceOrderPlugin(),
                            new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
                          ];
  if (debug) { plugins = plugins.concat(debugPlugins); } else { plugins = plugins.concat(prodPlugins); };

  return {
    context: __dirname,

    devtool: debug ? "inline-sourcemap" : null,

    entry: {
      "root": "./src/assets/js/root",
    },

    output: {
      path: path.join(__dirname, "dist"),
      filename: "assets/js/[name].min.js",
      publicPath: "../../"
    },

    devServer: {
      contentBase: "dist"
    },

    resolve: debug ? null : {
      alias: {
        'react$': path.join(__dirname, 'node_modules', 'react','dist',
          (debug ? 'react.js' : 'react.min.js')),
        'react-dom$': path.join(__dirname, 'node_modules', 'react-dom','dist',
          (debug ? 'react-dom.js' : 'react-dom.min.js')),
        'redux$': path.join(__dirname, 'node_modules', 'redux','dist',
          (debug ? 'redux.js' : 'redux.min.js')),
        'react-redux$': path.join(__dirname, 'node_modules', 'react-redux','dist',
          (debug ? 'react-redux.js' : 'react-redux.min.js'))
      }
    },

    module: {

      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract( "style-loader", cssLoaders.join('!') )
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract( "style-loader", scssLoaders.join('!') )
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract( "style-loader", lessLoaders.join('!') )
        },
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          query: jsQueries
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'file?name=assets/content/img/[name].[ext]'
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: 'file?name=assets/content/fonts/[name].[ext]'
        }
      ]

    },

    postcss: [
      autoprefixer({ browsers: [autoprefix] })
    ],

    plugins: plugins,

  };

}

module.exports = config();
