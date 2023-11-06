import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../api"

import './styles.scss'

import Chat from "./Chat"
import Login from "./Login"
import SignUp from "./SignUp"
import InitUser from "./InitUser"
import { v4 } from "uuid"

const AppContext = createContext()

export default function App() {
  const [route, setRoute] = useState(localStorage.getItem("route") || "")
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, user => {
    if (!user) return

    // Find if the user is init in firestore
  })

  useEffect(function () {
    localStorage.setItem('route', route) // save the last page visits
  }, [route])

  return (
    <AppContext.Provider value={{ route: [route, setRoute], user: [user, setUser] }}>
      <div className="container">
        <nav className="navbar">
          {['login', 'signup', 'chats', 'init_user'].map(i => (
            <div key={v4()} className="nav-item" onClick={e => setRoute(i)}>
              {i.toUpperCase()}
            </div>
          ))}
        </nav>
        <main className="main-section">
          {(!route || route == 'signup') && <SignUp />}
          {route == 'login' && <Login />}
          {route == 'chats' && <Chat />}
          {route == 'init_user' && <InitUser />}
        </main>

      </div>
    </AppContext.Provider>
  )
}
export { AppContext }

// 