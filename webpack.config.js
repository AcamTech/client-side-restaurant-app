// For info about this file refer to webpack and webpack-hot-middleware documentation
// Rather than having hard coded webpack.config.js for each environment, this
// file generates a webpack config for the environment passed to the getConfig method.
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import autoprefixer from 'autoprefixer';

const developmentEnvironment = 'development' ;
const productionEnvironment = 'production';
const testEnvironment = 'test';

const getPlugins = function (env) {
  const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env === developmentEnvironment
  };

  const plugins = [
    //new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"}),
    //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: Infinity
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS) //Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
  ];

  switch (env) {
    case productionEnvironment:
      plugins.push(new ExtractTextPlugin('./styles.css', {allChunks: true}));
      plugins.push(new CopyWebpackPlugin([{from: './src/200.html', to: './200.html'}], {}));
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin());
      break;

    case developmentEnvironment:
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NoErrorsPlugin());
      break;
  }

  return plugins;
};

const getEntry = function (env) {
  const entries = {bundle: [], vendors: ['react', 'react-dom']};

  if (env === developmentEnvironment ) { // only want hot reloading when in dev.
    entries.bundle.push('webpack-hot-middleware/client?reload=true');
    entries.bundle.push('react-hot-loader/patch');
  }

  entries.bundle.push('./src/index');

  return entries;
};

const getLoaders = function (env) {
  const loaders = [{ test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
                  { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file']},
                  {test: /\.json$/, loaders: ['json']},
                  {test: /\.otf(\?\S*)?$/, loader: 'url-loader?limit=10000'},
                  {test: /\.eot(\?\S*)?$/, loader: 'url-loader?limit=10000'},
                  {test: /\.svg(\?\S*)?$/, loader: 'url-loader?mimetype=image/svg+xml&limit=10000'},
                  {test: /\.ttf(\?\S*)?$/, loader: 'url-loader?mimetype=application/octet-stream&limit=10000'},
                  {test: /\.woff2?(\?\S*)?$/, loader: 'url-loader?mimetype=application/font-woff&limit=10000'}
                  ];

  if (env === productionEnvironment ) {
    // generate separate physical stylesheet for production build using ExtractTextPlugin. This provides separate caching and avoids a flash of unstyled content on load.
    loaders.push({
        test: /(\.css|\.scss)$/,
        loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap",
          {
            publicPath: './'
          })
      });
  } else {
    loaders.push({test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']});
  }

  return loaders;
};

function getConfig(env) {
  return {
    debug: true,
    devtool: env === productionEnvironment  ? '' : 'cheap-module-eval-source-map', //'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    noInfo: true, // set to false to see a list of every file being bundled.
    entry: getEntry(env),
    target: env === testEnvironment ? 'node' : 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
      path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
      publicPath: env === productionEnvironment ? '/' : 'http://localhost:3001/',
      filename: '[name].js'
    },
    resolve: {
      root: path.resolve('./src')
      // alias: {
      //   jquery: "jquery/src/jquery"
      // }
    },
    plugins: getPlugins(env),
    module: {
      // preLoaders: [{
      //     test: /jquery[\\\/]src[\\\/]selector-sizzle\.js$/,
      //     loader: 'string-replace',
      //     query: {
      //         search: '../external/sizzle/dist/sizzle',
      //         replace: 'sizzle'
      //     }
      // }],
      loaders: getLoaders(env)
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
  };
}

export default getConfig;
