import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext'

const BandAdd = () => {
  const [newBand, setNewBand] = useState('')
  const { socket } = useContext(SocketContext)

  const onSubmit = (e) => {
    e.preventDefault()
    if (newBand.length > 0) {
      socket.emit('add-band', { name: newBand })
      setNewBand('')
    }
  }

  return (
    <>
      <div>Agregar nueva banda</div>
      <form onSubmit={onSubmit}>
        <input placeholder='ingresar' value={newBand} onChange={(e) => setNewBand(e.target.value)}></input>
      </form>
    </>

  )
}

export default BandAdd