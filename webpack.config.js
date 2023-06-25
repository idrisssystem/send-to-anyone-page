const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const setup = (mode) => {
    if (mode === 'production') {
        return {
            POLYGON_RPC_ENDPOINT: `'https://polygon-rpc.com/'`,
            POLYGON_CHAIN_ID: `'137'`,
            POLYGON_BLOCK_EXPLORER_ADDRESS: `'https://polygonscan.com'`,
            IDRISS_HOMEPAGE: `'https://idriss.xyz'`,
            ALCHEMY_API_KEY: `'k9tHd_GSazWwIVyu4lkeZz1EVDjg2qwN'`,
        }
    } else if (mode === 'none') {
        return {
//            POLYGON_RPC_ENDPOINT: `'http://localhost:8545'`,
//            POLYGON_CHAIN_ID: `'1337'`,
//            POLYGON_BLOCK_EXPLORER_ADDRESS: `'https://mumbai.polygonscan.com'`,
//            IDRISS_HOMEPAGE: `'http://localhost'`,
//            ALCHEMY_API_KEY: `'k9tHd_GSazWwIVyu4lkeZz1EVDjg2qwN'`,
            POLYGON_RPC_ENDPOINT: `'https://polygon-rpc.com/'`,
            POLYGON_CHAIN_ID: `'137'`,
            POLYGON_BLOCK_EXPLORER_ADDRESS: `'https://polygonscan.com'`,
            IDRISS_HOMEPAGE: `'https://idriss.xyz'`,
            ALCHEMY_API_KEY: `'k9tHd_GSazWwIVyu4lkeZz1EVDjg2qwN'`,
        }
    } else {
        return {
            // Mumbai - Polygon testnet
            POLYGON_RPC_ENDPOINT: `'https://rpc-mumbai.matic.today'`,
            POLYGON_CHAIN_ID: `'80001'`,
            POLYGON_BLOCK_EXPLORER_ADDRESS: `'https://mumbai.polygonscan.com'`,
            IDRISS_HOMEPAGE: `'https://idriss.xyz'`,
            ALCHEMY_API_KEY: `'k9tHd_GSazWwIVyu4lkeZz1EVDjg2qwN'`,
        }
    }
}

module.exports = (env, argv) => {
    console.log(`This is the Webpack 5 'mode': ${argv.mode}`);

    return {
        mode: `{$argv.mode}`, // "production" | "development" | "none"
        entry: {
            "scriptSendToAnyone": "./src/index.js",
            "generateSendToAnyoneCode": "./src/generateSendToAnyoneCode.js",
            "idrissSendToAnyoneSDK": "./src/idrissSendToAnyoneSDK/idrissSendToAnyoneSDK.js",
        },
        devtool: "inline-source-map",
        output: {
            path: path.resolve(__dirname, "../IDriss/static/js/send"),
            publicPath: "auto",
            filename: "[name].js",
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {from: "./src/send-to-anyone.html", to: "../../../templates"},
                    {from: "./src/generateSendToAnyoneCode.html", to: "../../../templates"},

                ],
            }),
            new HtmlWebpackPlugin({
              template: "./src/send-to-anyone.html",
            }),
            //new BundleAnalyzerPlugin()
            new webpack.DefinePlugin(setup(argv.mode))
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                },
                {
                    test: /\.mpts$/,
                    use: [
                        "mpts-loader"
                    ]
                },
            ]
        },
        optimization: {
            //runtimeChunk: 'single',
        },
    };
}
// module.exports = {
//     mode: "development", // "production" | "development" | "none"
//     entry: {
//         "scriptSendToAnyone": "./src/index.js",
//         "generateSendToAnyoneCode": "./src/generateSendToAnyoneCode.js",
//         "idrissSendToAnyoneSDK": "./src/idrissSendToAnyoneSDK/idrissSendToAnyoneSDK.js",
//     },
//     devtool: "inline-source-map",
//     output: {
//         path: path.resolve(__dirname, "buildResults"),
//         filename: "static/js/[name].js",
//     },
//     plugins: [
//         new CopyPlugin({
//             patterns: [
//                 {from: "./src/send-to-anyone.html", to: "."},
//                 {from: "./src/generateSendToAnyoneCode.html", to: "."},
//
//             ],
//         }),
//         //new BundleAnalyzerPlugin()
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.scss$/,
//                 use: [
//                     "css-loader", // translates CSS into CommonJS
//                     "sass-loader" // compiles Sass to CSS, using Node Sass by default
//                 ]
//             },
//             {
//                 test: /\.mpts$/,
//                 use: [
//                     "mpts-loader"
//                 ]
//             },
//             {
//                 test: /\.json$/,
//                 loader: 'json-loader'
//             }
//         ]
//     },
//     optimization: {
//         //runtimeChunk: 'single',
//     },
// }
