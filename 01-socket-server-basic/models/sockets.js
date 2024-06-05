class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (socket) => {

      socket.on('mensaje-to-server', data => {
        console.log(data);
        // socket.emit('mensaje-from-server', data)
        //cambiamos socket por io para emitir el mensaje para todos los que se encuentren en esa conexion
        this.io.emit('mensaje-from-server', data)

      })


    });
  }
}

module.exports = Sockets;