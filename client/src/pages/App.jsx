import { createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Chats from './Chats';
import Login from './Login';
import Register from './Register';

import styles from './App.module.scss';

const appContext = createContext()

function App() {
  useEffect(function () {
  }, [])

  return (
    <div className={styles.App}>
      <div className={styles.navbar}>
        <a href="/">Home</a>
        <a href="login">Login</a>
        <a href="chats">Chat</a>
        <a href="register">Register</a>
      </div>
      <appContext.Provider value={"hello"}>
        <BrowserRouter>
          <Routes>
            <Route path='/' >
              <Route index element={<h1>Hello</h1>} />
              <Route path='chats' element={<Chats />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </appContext.Provider>
    </div>
  );
}

export default App;
export { appContext }
