import { useContext, useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import './styles.scss'
import { auth } from '../../api'
import TextInput from './components/TextInput'
import Button from './components/Button'

import { AppContext } from '../App'

export default function () {
  // const { route: [, setRoute], user: [, setUser] } = useContext(AppContext)
  const [email, setEmail] = useState("ducminhdo@gmail.com")
  const [pass, setPass] = useState("123456")

  const [login, setLogin] = useState(0)

  function onSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass).catch(err => setLogin(1))
  }

  return (
    <div className="login-page">
      <form className="input-form" onSubmit={onSubmit}>
        <TextInput name="Email" val={email} styles={{ width: "100%" }} placeholder="Email..." onChange={setEmail} type="email" />
        <TextInput name="Password" val={pass} styles={{ width: "100%" }} onChange={setPass} placeholder="Password" type="password" />
        {login ? <span className='login-message'>Password or Email is incorrect.</span> : undefined}
        <Button name={"Sign in"} />
        {/* <TextInput name="Hello" /> */}
      </form>
    </div>
  )
}