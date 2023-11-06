import { useContext, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth, firestore } from '../../api'

import './styles.scss'
import TextInput from './components/TextInput'
import Button from './components/Button'
import { AppContext } from '../App'

export default function () {
  const { route: [, setRoute] } = useContext(AppContext)

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [npass, setNpass] = useState("")
  const [login, setLogin] = useState(0)


  async function SignUp(e) {
    e?.preventDefault?.();

    if (npass != pass) return setLogin(1)
    createUserWithEmailAndPassword(auth, email, pass).then(user => {
      setRoute("login")
    }).catch(() => setLogin(2))
    // console.log(user)
  }

  return (
    <div className="login-page">

      <form className="input-form" onSubmit={SignUp}>
        <TextInput name="Email" type='email' styles={{ width: "100%" }} placeholder="Type your email...." val={email} onChange={setEmail} />
        <TextInput name="Password" styles={{ width: "100%" }} val={pass} onChange={setPass} placeholder="Type your password...." />
        <TextInput name="Re-enter pass" type='password' styles={{ width: "100%" }} val={npass} onChange={setNpass} placeholder="R-enter your password...." />
        {login == 1 ? <span className='login-message'>Password is not matched.</span> : null}
        {login == 2 ? <span className='login-message'>Create account failed.</span> : null}
        <Button name={"Register"} key={SignUp} />
      </form>
      {/* <TextInput name="Hello" /> */}

    </div>
  )
}