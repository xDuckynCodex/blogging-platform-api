const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json({
    extend: true
}))
app.use(morgan('dev'))

require('./db/connect.mongodb')

app.use('/', require('./routes/post'))

module.exports = app