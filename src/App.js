import './App.css';
import { getInterfaceID } from './utils/getInterfaceID';
import { parseInterfaceABI } from './utils/parseInterfaceABI';
import { useState } from 'react';

function App() {
  const [interfaceID, setInterfaceID] = useState('');

  return (
    <div className='App'>
      <p>
        <a href='https://eips.ethereum.org/EIPS/eip-165'>EIP-165 identifier</a>{' '}
        for interface: <b>{interfaceID._hex}</b>
      </p>
      <textarea
        placeholder='Paste Your Interface Here...'
        onChange={(event) =>
          setInterfaceID(getInterfaceID(parseInterfaceABI(event.target.value)))
        }
      ></textarea>
    </div>
  );
}

export default App;
