import { useEffect } from 'react'
import socketClient from 'socket.io-client'

import logo from '../logo.svg';
import './App.css';



function App() {
  const socket = socketClient()

  useEffect(function () {
    // fetch('/api').then(res => res.text()).then(console.log)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
