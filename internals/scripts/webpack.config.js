'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const AssetsPlugin = require('assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

const paths = {
    appSrc: resolveApp('src'),
    appBuild: resolveApp('build'),
    appIndexJs: resolveApp('src/js/scripts.js'),
    appNodeModules: resolveApp('node_modules'),
};

const DEV = process.env.NODE_ENV === 'development';

module.exports = {
	externals: {
		jquery: 'jQuery',
	},
	bail: !DEV,
    mode: DEV ? 'development' : 'production',
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    target: 'web',
    devtool: DEV ? 'cheap-eval-source-map' : 'source-map',
    entry: [paths.appIndexJs],
    output: {
        path: paths.appBuild,
        filename: DEV ? 'bundle.js' : 'bundle.[hash:8].js'
    },
    module: {
        rules: [
            // Disable require.ensure as it's not a standard language feature.
            { parser: { requireEnsure: false } },
            // Transform ES6 with Babel
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env' ]
                },
                include: paths.appSrc,
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                },
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                use: {
                    loader: "file-loader"
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer',
                                ]
                            }
                        }
                    },
                    'sass-loader',
                ],
            }
        ],
    },
    optimization: {
        minimize: !DEV,
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true,
                    }
                }
            }),
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        warnings: false
                    },
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    plugins: [
        !DEV && new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: DEV ? 'bundle.css' : 'bundle.[hash:8].css'
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false,
        }),
        new AssetsPlugin({
            path: paths.appBuild,
            filename: 'assets.json',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether',
            'window.Tether': 'tether',
            google: 'google',
        }),
        DEV &&
        new FriendlyErrorsPlugin({
            clearConsole: false,
        }),
        DEV &&
        new BrowserSyncPlugin({
            notify: false,
            host: 'localhost',
            port: 4000,
            logLevel: 'silent',
            files: ['./*.php'],
            proxy: 'http://localhost/',
        }),
		DEV &&
		new StylelintPlugin(),
		DEV &&
		new ESLintPlugin(),
    ].filter(Boolean),
};
