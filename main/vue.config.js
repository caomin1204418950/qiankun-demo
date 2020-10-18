module.exports = {
    runtimeCompiler: true,
    transpileDependencies: [
        'element-ui'
    ],
    pages: {
        index: {
            entry: ['node_modules/whatwg-fetch', 'src/main.js']
        }
    }
}