module.exports = {
    entry: './src/index.js',
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