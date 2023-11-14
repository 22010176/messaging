import styles from './styles.module.scss'

export default function Message({ name, message, owner }) {
  return (
    <div className={styles.message}>
      <div className={styles['user-message']}>
        {name} {owner ? "(you)" : ""}
      </div>
      <div className={styles['messaage-text']}>
        {message}
      </div>
    </div>
  )
}