const express = require('express')
const courseRouter = require(`${__dirname}/courseRouter`)
const errHandler = require(`${__dirname}/errorController`)

const app = express()
app.use(express.json());
app.use('/api/courses', courseRouter)
app.use(errHandler)
module.exports = app