const path = require('path');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
          { test: /\.svg$/, use: 'svg-inline-loader' },
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
          { test: /\.(js)$/, use: 'babel-loader' }
        ]
      },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          port: 3000,
      }
}