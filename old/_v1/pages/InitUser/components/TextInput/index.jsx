import 'reset-css'

import './styles.scss'
export default function ({ name, styles, val, onChange, type = 'text', placeholder, disabled }) {
  function _onChange(e) {

    if (typeof onChange == 'function') onChange(e.target.value);
  }
  return (
    <div className='text-input-sect' style={styles}>
      <label htmlFor={name}>{name}</label>
      <input disabled={disabled} className="input-filed" type={type} id={name} value={val} placeholder={placeholder} onChange={_onChange} required />
    </div>
  )
}