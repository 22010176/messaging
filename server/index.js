const { io, server, PORT } = require('./server')

server.listen(PORT)

const message = []

io.on('connection', socket => {
  socket.emit("messages", message)

  socket.on("message", function (data) {
    message.push(data)
    socket.emit("messages", message)
    socket.broadcast.emit("messages", message)
  })
})
