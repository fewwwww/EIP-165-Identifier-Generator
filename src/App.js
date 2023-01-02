import './App.css';
import { getInterfaceID } from './utils/getInterfaceID';
import { parseInterfaceABI } from './utils/parseInterfaceABI';
import { useState, useEffect } from 'react';

function App() {
  const [interfaceCode, setInterfaceCode] = useState('');
  const [interfaceID, setInterfaceID] = useState('');

  useEffect(() => {
    setInterfaceID(getInterfaceID(parseInterfaceABI(interfaceCode)))
  }, [interfaceCode])

  return (
    <div className='App'>
      <p><a href='https://eips.ethereum.org/EIPS/eip-165'>EIP-165 identifier</a> for interface: <b>{interfaceID._hex}</b></p>
      <textarea placeholder='Paste Your Interface Here...' onChange={event => setInterfaceCode(event.target.value)}>
      </textarea>
    </div>
  );
}

export default App;
