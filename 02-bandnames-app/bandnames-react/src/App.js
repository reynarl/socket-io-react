import io from 'socket.io-client'
import { useEffect, useState } from 'react';

import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";

const connectSocketServer = () => (
  io.connect('http://localhost:8080', {
    transports: ['websocket']
  })
)

function App() {
  const [socket] = useState(connectSocketServer)
  const [online, setOnline] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setOnline(socket.connected)
  }, [socket])

  useEffect(() => {
    // cuando el socket se conecta
    socket.on('connect', () => setOnline(true))
  }, [socket])

  useEffect(() => {
    // cuando el socket se desconecta
    socket.on('disconnect', () => setOnline(false))
  }, [socket])

  useEffect(() => {
    socket.on('current-bands', (bands) => setData(bands))
  }, [socket])

  //emitir socket para incrementar votos
  const votar = (id) => {
    //emitimos el evento y como argumento mandamos el id
    socket.emit('add-vote', id)
  }

  //emitir socket para borrar una banda
  const deleteBand = id => {
    socket.emit('delete-band', id)
  }

  //cambiar nombre
  const changeName = (id, newName) => {
    socket.emit('change-name', { id, newName })
  }

  //agregar banda
  const addBand = (name) => {
    socket.emit('add-band', name)
  }

  return (
    <>
      <div className='container'>
        <div className='alert'>
          <p>
            Service status:
            {
              online ? <span className='text-success ms-2'>Online</span> : <span className='text-danger ms-2'>Offline</span>
            }
          </p>
        </div>

        <h1>Band Names</h1>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <BandList
              data={data}
              votar={votar}
              deleteBand={deleteBand}
              changeName={changeName}
              addBand={addBand}
            />
          </div>
          <div className='col-12 col-md-4'>
            <BandAdd addBand={addBand} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
