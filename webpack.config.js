const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = 'public';
const appPath = 'src';
const BUILD_DIR = path.resolve(__dirname, buildPath);
const APP_DIR = path.resolve(__dirname, appPath);

/*  
    The plugin will generate an HTML5 file for you that includes 
    all your webpack bundles in the body using script tags 
*/
const HtmlWebpackPluginConf = new HtmlWebpackPlugin({
    template: APP_DIR + '/index.html',
    filename: BUILD_DIR + '/index.html',
    inject: true
});

module.exports = {
    entry: {
        index: APP_DIR + '/index.js'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(js|jsx)?$/,
                include: APP_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/react", "@babel/env"],
                    plugins: [
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-proposal-class-properties",
                    ]
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '/assets/img/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader?limit=8192',
                options: {
                    name: '/assets/fonts/[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [HtmlWebpackPluginConf],
    devServer: {
        contentBase: buildPath,
        inline: true,
        hot: true,
        open: true,
        stats: 'errors-only',
        historyApiFallback: true
    }
};