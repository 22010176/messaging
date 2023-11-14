import 'reset-css'

import styles from './styles.module.scss'

export default function InputField({ value, setValue, type = 'text', text, id }) {
  function onChange(e) { setValue(e.target.value) }
  return (
    <div className={styles['form-sect']}>
      <label htmlFor={id}>{text}</label>
      <input className={styles['input-text']} onChange={onChange} value={value} type={type} id={id} />
    </div>
  )
}