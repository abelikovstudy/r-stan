const path = require('path')
const { VueLoaderPlugin }  = require('vue-loader')


module.exports = {
    mode : "development",
    entry: './static/js/main.js',
    output: {
        filename: 'bundle.js',
        path : path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",

    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue-loader' : 'vue-loader/dist/plugin',
            'vue-style-loader' : 'vue-style-loader/index'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]

}
