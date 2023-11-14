/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'
import { v4 } from 'uuid';

import socket from '../../server'
import Message from './components/Message';
import Button from './components/button';

const inputWidth = 30;

export default function App() {

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(function () {
    const _name = localStorage.getItem('user')

    if (_name) setName(_name)
    else {
      setName(v4())
      localStorage.setItem('user', name);
    }

    socket.connect()

    socket.on("messages", function (data) {
      setMessages(data)
    })

    return () => {
      socket.off("message")
      socket.off("messages")
      socket.disconnect()
    }
  }, [])


  function _onSubmit(e) {
    e.preventDefault()
    socket.emit("message", { name, message })

    setMessage("")
  }


  return (
    <div className={[styles['chat-app']].join(' ')}>
      <div className={[styles['message-box'], styles.container].join(' ')}>
        {messages.map(i => <Message owner={i.name === name} name={i.name} message={i.message} key={v4()} />)}
      </div>
      <div className={[styles['message-form'], styles.container].join(' ')}>
        <div className={styles['form-wrapper']}>
          <form className={styles['input-form']} onSubmit={_onSubmit}>
            <textarea value={message} onChange={e => setMessage(e.target.value || "")} placeholder='Your message...' className={styles['message-input']} cols={inputWidth} rows={Math.ceil(message.length / 30) + message.split('\n').length} />
            <Button text="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}