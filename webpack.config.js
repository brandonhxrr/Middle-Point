var path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/Aplicacion.jsx",
    output: {
      path: path.resolve(__dirname, 'src/main/webapp/dist'),
      publicPath: '/Middle-Point/',
      filename: "main.js"
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: [
              // [style-loader](/loaders/style-loader)
              { loader: 'style-loader' },
              // [css-loader](/loaders/css-loader)
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              }
            ]
          }
        ]
      },
      devServer: {
        historyApiFallback: true,
      }    
    }
