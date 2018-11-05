module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      { 
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
  filename: 'bundle.js',
  path: __dirname + '/client/dist'
  },
  mode: 'development'
};