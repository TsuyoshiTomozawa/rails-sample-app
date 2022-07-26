const path    = require("path")
const webpack = require("webpack")

process.env.RAILS_ENV = process.env.RAILS_ENV || 'development'
process.env.NODE_ENV = process.env.NODE_ENV || process.env.RAILS_ENV

module.exports = {
    mode: ['development', 'production'].includes(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development',
    devtool: "source-map",
    entry: {
        application: "./app/javascript/application.js"
    },
    output: {
        filename: "[name].js",
        sourceMapFilename: "[name].js.map",
        path: path.resolve(__dirname, "app/assets/builds"),
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
}

// module.exports = {
//   mode: "production",
//   devtool: "source-map",
//   entry: {
//     application: "./app/javascript/application.js"
//   },
//   output: {
//     filename: "[name].js",
//     sourceMapFilename: "[file].map",
//     path: path.resolve(__dirname, "app/assets/builds"),
//   },
//   plugins: [
//     new webpack.optimize.LimitChunkCountPlugin({
//       maxChunks: 1
//     })
//   ]
// }
