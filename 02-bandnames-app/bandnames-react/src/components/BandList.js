import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/SocketContext'

const BandList = () => {
  const [bands, setBands] = useState([])
  const { socket } = useContext(SocketContext)

  useEffect(() => {
    socket.on('current-bands', (bands) => setBands(bands))
    return () => socket.off('current-bands')
  }, [socket])


  const handleChangeName = (id, e) => {
    const newName = e.target.value

    setBands(bands => bands.map(band => {
      if (band.id === id) {
        band.name = newName
      }
      return band
    }))
  }

  const saveChanges = (id, name) => {
    socket.emit('change-name', { id, newName: name })
  }

  return (
    <>
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {
            bands.map(band => (
              <tr key={band.id}>
                <td>
                  <button className='btn btn-success' onClick={() => socket.emit('add-vote', band.id)}>+1</button>
                </td>
                <td>
                  <input
                    value={band.name}
                    onChange={(e) => handleChangeName(band.id, e)}
                    onBlur={() => saveChanges(band.id, band.name)}
                  ></input>
                </td>
                <td><h3>{band.votes}</h3></td>
                <td>
                  <button className='btn btn-danger' onClick={() => socket.emit('delete-band', band.id)}>Borrar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default BandList