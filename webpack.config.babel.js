import path from 'path'

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'poc/common/'),
    filename: 'virtual-webaudio.js',
    library: 'virtualWebaudio'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
