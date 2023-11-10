import styles from './styles.module.scss'

export default function Message({ name, messaage: message }) {
  return (
    <div className={styles.message}>
      <div className={styles['user-message']}>
        {name}
      </div>
      <div className={styles['messaage-text']}>
        {message}
      </div>
    </div>
  )
}