const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path')
const Sockets = require('./sockets')

class Server {

  constructor() {

    this.app = express();
    this.port = 3000;

    // http server
    this.server = http.createServer(this.app)

    // configuracion de sockets
    this.io = socketio(this.server, {});
  }

  middlewares() {
    // this.app.use(express.static( __dirname + '../public'))
    this.app.use(express.static(path.resolve(__dirname, '../public')))
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    //Inicializar middlewares
    this.middlewares();

    //Inicializar sockets
    this.configurarSockets();

    //inicializar server
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto', this.port);
    })
  }
}

module.exports = Server;