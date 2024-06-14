import React, { useState } from 'react'

const BandAdd = ({ addBand }) => {
  const [newBand, setNewBand] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (newBand.length > 0) {
      addBand(newBand)
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