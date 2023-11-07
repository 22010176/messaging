import { useEffect } from 'react'
import socketClient from 'socket.io-client'

import './App.css';



function App() {
  const socket = socketClient()
  socket.on('connection', () => {
    console.log("Hello")
  })
  useEffect(function () {
    fetch('/api').then(res => res.json()).then(console.log)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
