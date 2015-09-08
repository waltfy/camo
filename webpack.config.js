module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "dst/camo.js",
        library: "Camo",
        libraryTarget: "var"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
};
