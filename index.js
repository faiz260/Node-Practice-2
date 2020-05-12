const config = require('./config')

require('./server')({
    port: config.PORT,
    cb: () => {
        console.log(`server is running on port ${config.PORT}`)
    },
})