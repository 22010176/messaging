import 'reset-css'

import styles from './styles.module.scss'

export default function Button({ text }) {
  return <button className={styles.button}>{text}</button>
}