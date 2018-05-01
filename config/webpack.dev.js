import { resolve } from "path";

module.exporte = {
  entry: {
    main: ['./src/main-entry.js']
  },
  mode: '',
  output: {
    filename: '[name]-bundle.js',
    path: resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  }
}