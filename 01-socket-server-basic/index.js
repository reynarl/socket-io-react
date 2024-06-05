//Servidor de Express
const express = require('express');
const app = express();

//Servidor de sockets
const server = require('http').createServer(app);

//configuracion del socket server
const io = require('socket.io')(server);

//desplegar el directorio publico
app.use(express.static(__dirname + '/public'));

//un dispositivo que se conectó
io.on('connection', (socket) => {
  // console.log("cliente conectado");
  socket.emit('mensaje-bienvenida', {
    msg: 'Bienvenido al server',
    date: new Date()
  })
});

server.listen(3000, () => {
  console.log('Server running... port 3000');
});