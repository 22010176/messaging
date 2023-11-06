import 'reset-css'
import { v4 } from 'uuid'

import './styles.scss'

import Button from '../Button2'

export default function ({ id, image, name, content = "", date, owner = false }) {
  return (
    <div className='message-container' id={id}>
      <img src={image} alt="e" />
      <div className='content'>
        <div className='user-info'>
          <div className='user-name'>{name}</div>
          <div className='date-sent'>{date}</div>
        </div>
        <div className='message-content'>
          {content}
        </div>
      </div>
      {owner && <div className='funcs'>
        <Button name={"DEL"} />
        <Button name={"EDIT"} />
      </div>}
    </div>
  )
}