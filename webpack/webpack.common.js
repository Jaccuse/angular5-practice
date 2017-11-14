var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./helpers");

module.exports = {
    entry: {
        "polyfills": helpers.root("src") + "/polyfills.ts",
        "vendor": helpers.root("src") + "/vendor.ts",
        "app": helpers.root("src") + "/main.ts",
        "css": helpers.root("") + "/app.css"
    },

    resolve: {
        extensions: [".ts", "js"]
    },

    module: {
        rules: [
            {
                test: /\.(html|php)$/
                loader: "html-loader"
            },
            {

            }
        ]
    }
}