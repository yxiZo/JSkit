module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: __dirname + '/dist',
        library: {
            name: 'jskit',
            type: 'umd'
        },
        clean: true,
    }
}