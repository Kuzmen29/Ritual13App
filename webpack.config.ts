
import path from "path";
import webpack, { Configuration } from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from 'copy-webpack-plugin';


interface IPaths {
    html: string,
    index: string,
    output: string,
    public: string,
    src: string
}

type Mode = 'development' | 'production';
type Port = number;

interface IEnvVariables {
    mode?: Mode,
    port?: Port,
}

export default function (env: IEnvVariables) {

    const paths: IPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        index: path.resolve(__dirname, 'src', 'index.tsx'),
        public: path.resolve(__dirname, 'public'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
    };

    const tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                }
            }
        ]
    }

    const cssLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                namedExport: false,
                exportLocalsConvention: 'as-is',
            },
        },
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            env.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            // Translates CSS into CommonJS
            cssLoader,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const assetLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(__dirname, paths.public, 'favicon.ico')
        }),
    ]

    if (env.mode === 'production') {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
        )
    }

    plugins.push(
        new CopyPlugin(
            {
                patterns: [
                    { from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve(paths.output, 'assets') }
                ],
            }
        )
    )

    const config: webpack.Configuration = {

        entry: {
            index: paths.index
        },

        mode: env.mode ?? 'development',

        output: {
            path: paths.output,
            publicPath: '/'
        },

        plugins,

        devServer: {
            static: {
                directory: paths.public,
            },

            compress: true,
            port: env.port ?? 4200,
            // host : '192.168.1.2',
            historyApiFallback: true,
            // hot: true
            // open: true,
        },

        module: {
            rules: [styleLoader, tsLoader, assetLoader],
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@': paths.src
            }
        }

    }



    return config;
}