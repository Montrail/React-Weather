var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
       __dirname, 'node_modules'
    ],
    alias: {
      Main: 'app/components/Main.jsx',
      Navbar: 'app/components/Navbar.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/Components/WeatherForm',
      WeatherMessage: 'app/Components/WeatherMessage',
      About: 'app/components/About.jsx',
      Examples: 'app/Components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['*','.js', '.jsx']
  },
  module: {
    loaders: [
      {
      // loader: 'babel-loader',
      // query: {
      //   presets: ['react', 'es2015']
      // },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader?-babelrc,+cacheDirectory,presets[]=es2015,presets[]=react,presets[]=stage-0'
    }
  ]
},
devtool: 'cheap-module-eval-source-map'
};
