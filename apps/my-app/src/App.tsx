import React from 'react';
import logo from './logo.svg';
import './App.css';

import AwesomeComponent from '@namespace/awesome-react-component';
import { log } from '@namespace/common';

function App() {

  React.useEffect(() => {
    log('Hello from CRA app!');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <AwesomeComponent />
      </header>
    </div>
  );
}

export default App;
