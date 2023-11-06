import { createContext, useEffect, useRef, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { v4 } from "uuid"

import './styles.scss'


import { auth } from "../api"
import Chat from "./Chat"

const AppContext = createContext()

export default function App() {
  const name = useRef(v4())

  // useEffect(function () {
  //   setUser(localStorage.getItem('user'))
  // }, [])

  // useEffect(function () {
  //   localStorage.setItem('user', user);
  // }, [user])

  return (
    <AppContext.Provider value={name}>
      <Chat />
    </AppContext.Provider>
  )
}

export { AppContext }

