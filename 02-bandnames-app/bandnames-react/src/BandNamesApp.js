import React from 'react'
import { SocketProvider } from './context/SocketContext'
import App from './App'

const BandNamesApp = () => {
  return (
    <SocketProvider>
      <App />
    </SocketProvider>
  )
}

export default BandNamesApp