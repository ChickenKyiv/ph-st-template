// webpack v4
const path = require('path');
module.exports = {
  entry: { main: './src/public/js/main.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    /*  {
        test: /\.scss$/,
        use: [{
                loader: "style-loader"
        },
              {
                loader: "css-loader"
        },
              {
                loader: "sass-loader"
        }]
      } */
    ]
  }
};
