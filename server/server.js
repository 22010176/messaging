// server/index.js

const path = require('path')
const express = require("express")
const http = require('http')

const PORT = 3001;
const app = express();
const server = http.createServer(app)

const io = require('socket.io')(server)

app.use(require('cors')({ origin: ['http://127.0.0.1:3001'] }))
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use('/api', require('./Route'))
// app.get("/api", (req, res) => res.json({ message: "Hello from server!" }));

module.exports = { io, server, PORT }

// server.listen(PORT, () => console.log("Database connection is Ready and Server is Listening on Port ", PORT))

// io.on('connection', socket => {
//   console.log("New");
//   socket.emit('connection', null);
// })
