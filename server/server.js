// server/index.js

const path = require('path')
const express = require("express")
const { createServer } = require('http')

const PORT = 3001;
const app = express();
const server = createServer(app)

const io = require('socket.io')(server)

app.use(require('cors')({ origin: 'http://127.0.0.1:3001', credentials: true }))
app.use(express.static(path.resolve(__dirname, '../client/build')))

module.exports = { io, server, PORT }

app.use('/api', require('./Route'))


