const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //  -> ADDED IN THIS STEP

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js')
}

//Webpack Configuration

module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    // Dev server configuration -> ADDED IN THIS STEP
    // Now it uses our "src" folder as a starting point
    // devServer: {
    //     contentBase: paths.SRC
    // },
    // Loaders configuration -> ADDED IN THIS STEP
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            // CSS loader to CSS files -> ADDED IN THIS STEP
            // Files will get handled by css loader and then passed to the extract text plugin
            // which will write it to the file we defined above
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    'css-loader'
                ),
            },
            // File loader for image assets -> ADDED IN THIS STEP
            // We'll add only image extensions, but you can things like svgs, fonts and videos
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                'file-loader',
                ],
            },
        ],
    },
    // Tell webpack to use html plugin -> ADDED IN THIS STEP
    // index.html is used as a template in which it'll inject bundled app.
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('[name].bundle.css')
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}