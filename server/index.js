const { io, server, PORT } = require('./server')

server.listen(PORT)

io.on('connection', socket => {
  console.log("New");
  socket.emit('connection', null);
})
