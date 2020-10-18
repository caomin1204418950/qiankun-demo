module.exports = {
    // publicPath: '/local-music',
    devServer: {
        port: 20000,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: 'resume',
            libraryTarget: 'umd'
        }
    }
}