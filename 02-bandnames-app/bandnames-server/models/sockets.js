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

            //escuchando el evento para agregar votos pasando el id y llamando la funcion increaseVotes() creada previamente para incrementar.
            socket.on('add-vote', (id) => {
                this.bandList.increaseVotes(id)
                //volvemos a emitir toda la lista de bandas para refrescar, y se visualizen los cambios
                //usamos this.io para que los cambios se generen en todas las paginas abiertas
                this.io.emit('current-bands', this.bandList.getBands())
            })

        });
    }


}


module.exports = Sockets;