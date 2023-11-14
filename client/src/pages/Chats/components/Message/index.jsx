import styles from './styles.module.scss'

export default function Message({ name, message, owner, maxLength = 50 }) {
  const message_ = message.split("").map((ch, i) => ch + ((i + 1) % maxLength ? '' : '\n')).join("").split("\n")
  return (
    <div className={styles.message}>
      <div className={styles['user-message']}>
        {name} {owner ? "(you)" : ""}
      </div>
      <div className={styles['messaage-text']}>
        {message_?.map((i, a) => (
          <div key={a}>
            {i}
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}