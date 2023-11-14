import { useEffect } from 'react'
import styles from './styles.module.scss'

export default function Register() {
  console.log(styles)
  useEffect(function () {
    fetch("account/login").then(a => a.text()).then(console.log)
  }, [])
  return (
    <div className={styles.register}>

    </div>
  )
}