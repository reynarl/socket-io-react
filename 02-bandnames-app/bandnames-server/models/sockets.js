const BandList = require("./bandList");


class Sockets {

    constructor(io) {

        this.io = io;

        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            console.log('cliente conectado');

            socket.emit('current-bands', this.bandList.getBands())


        });
    }


}


module.exports = Sockets;