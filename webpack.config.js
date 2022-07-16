const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin'); 

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
              test:/\.(js|jsx)$/,
              exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
              loader: 'style-loader|css-loader', 
              test: /\.css$/
            },
            {
              loader: 'url-loader', 
              test: /\.gif$/
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },

       ],

    },
    resolve: {
        extensions: ['',".js", ".json", ".jsx", ".css"],
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: './index.html'
        })
    ]
}