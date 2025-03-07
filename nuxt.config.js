module.exports = {
    build: {
        extend (config, ctx) {
        if (ctx.isDev && ctx.isClient) {
            config.module.rules.push({
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                options : {
                    fix : true
                    }
                })
            }
        }
    }
}
    
