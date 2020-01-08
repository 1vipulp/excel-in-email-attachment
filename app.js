const express = require('express')
const app = express()
const config = require('./config/default.json')

require('./routes')(app)

app.listen(config.port, (err, res) => {
    if (err) console.error(`Error while listening on port: ${config.port}`) 
    else console.info(`Service is running on port: ${config.port}`)
})

module.exports = app