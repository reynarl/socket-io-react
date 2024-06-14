import React, { useEffect, useState } from 'react'

const BandList = ({ data, votar, deleteBand, changeName }) => {
  const [bands, setBands] = useState(data)

  useEffect(() => {
    setBands(data)
  }, [data])

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
    //Disparar el evento de socket
    changeName(id, name)
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
                  <button className='btn btn-success' onClick={() => votar(band.id)}>+1</button>
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
                  <button className='btn btn-danger' onClick={() => deleteBand(band.id)}>Borrar</button>
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