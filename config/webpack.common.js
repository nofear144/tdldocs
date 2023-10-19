const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default

const paths = require('./paths')
const styledComponentsTransformer = createStyledComponentsTransformer()

module.exports = {
    entry: [paths.src + '/index.tsx'],
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            filename: 'index.html',
            template: `${paths.public}/index.html`,
        }),
    ],
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
                },
            },

        ],
    },
    resolve: {
        modules: [paths.src, 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
        alias: {
            '@': paths.src,
            assets: paths.public,
        },
    },
}
