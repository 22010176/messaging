/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'
import { v4 } from 'uuid';

import Message from './components/Message';

const inputWidth = 30;

export default function App() {

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  useEffect(function () {
    const _name = localStorage.getItem('user')

    if (_name) setName(_name)
    else {
      setName(v4())
      localStorage.setItem('user', name);
    }
  }, [])

  function _onSubmit(e) {
    e.preventDefault()
    console.log(message)
  }


  return (
    <div className={[styles['chat-app']].join(' ')}>
      <div className={[styles['message-box'], styles.container].join(' ')}>
        <Message name={name} messaage={"asfdasfasfd"} />
        <Message name={name} messaage={"asfdasfasfd"} />
        <Message name={name} messaage={"asfdasfasfd"} />
        <Message name={name} messaage={"asfdasfasfd"} />

      </div>
      <div className={[styles['message-form'], styles.container].join(' ')}>
        <div className={styles['form-wrapper']}>
          <form className={styles['input-form']} onSubmit={_onSubmit}>
            <textarea value={message} onChange={e => setMessage(e.target.value || "")} placeholder='Your message...' className={styles['message-input']} cols={inputWidth} rows={Math.ceil(message.length / 30) + message.split('\n').length} />
            <button className={styles.btn} type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}