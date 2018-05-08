import path from "path";

module.exporte = {
  entry: { // paths in entry are always relative, (from ROOT)
    main: ['./src/js/main.js'] 
  },
  mode: '',
  output: { // paths in output is always the full path from the current directory (config folder)
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/js'
  },
  devServer: {
    contentBase: "dist", // serving everything out of the dist folder when in dev
    overlay: true
  }
}