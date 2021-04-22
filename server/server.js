const express = require('express')
const path = require('path')

const foxRoutes = require('./routes/fox')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/firefox', foxRoutes)

module.exports = server
