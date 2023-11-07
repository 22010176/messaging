// server/index.js

const path = require('path')
const express = require("express")
const cors = require('cors')
const http = require('http')


const PORT = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app)
const io = require('socket.io')(server)

app.use(cors({ origin: ['http://127.0.0.1:3001'] }))
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

io.on('connection', socket => {
  console.log("New")
  socket.emit('connection', null);
})
