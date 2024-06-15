
import { useContext } from 'react';

import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";
import { SocketContext } from './context/SocketContext';

function App() {
  const { online } = useContext(SocketContext)

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
            <BandList />
          </div>
          <div className='col-12 col-md-4'>
            <BandAdd />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
