
//Servidor de Express
const app = require('express')();
//Servidor de sockets
const server = require('http').createServer(app);

//configuracion del socket server
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000, () => {
  console.log('Server running... port 3000');
});