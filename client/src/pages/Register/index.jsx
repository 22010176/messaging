import { useEffect, useState } from 'react'

import { PostRequest } from '../../utilities'
import Button from './components/Button'
import InputField from './components/InputField'

import styles from './styles.module.scss'

export default function Register() {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [pass2, setPass2] = useState('')

  useEffect(function () {
    fetch("account/login").then(a => a.text()).then(console.log)
  }, [])

  async function onSubmit(e) {
    e.preventDefault()
    const res = await PostRequest('/account/register', `name=${name}&pass=${pass}&pass2=${pass2}`).then(a => a.json())

    console.log(res)
  }
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form className={styles['form-container']} action="/account/register" method="post" onSubmit={onSubmit}>
        <InputField value={name} setValue={setName} id={"username"} text={"Name"} type={"text"} />
        <InputField value={pass} setValue={setPass} id={"password"} text={"Password"} type={"password"} />
        <InputField value={pass2} setValue={setPass2} id={"reset-password"} text={"Re-enter Password"} type={"password"} />
        <Button text={"Submit"} />
      </form>
    </div>
  )
}