module.exports = {
    // publicPath: '/local-music',
    devServer: {
        port: 10000,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: 'music',
            libraryTarget: 'umd'
        }
    }
}