import React, { useState } from 'react'
import { useSocket } from '../hooks/useSocket'

const BandAdd = () => {
  const [newBand, setNewBand] = useState('')
  const { socket } = useSocket('http://localhost:8080')

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