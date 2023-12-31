/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'
import { v4 } from 'uuid';

import socket from '../../server'
import Message from './components/Message';
import Button from './components/button';

const inputWidth = 30;
let messagelen = 100;

function MessScoll(e) {
  const objDiv = e.target
  objDiv.scrollTop = objDiv.scrollHeight;
}

export default function App() {

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const messEnd = useRef()


  useEffect(function () {
    const _name = localStorage.getItem('user')

    if (_name) setName(_name)
    else {
      setName(v4())
      localStorage.setItem('user', name);
    }

    socket.connect()
    socket.on("messages", setMessages)

    const elem = document.querySelector("._message-container")
    elem.addEventListener("scroll", MessScoll)

    return () => {
      elem.removeEventListener("scroll", MessScoll)
      socket.off("message")
      socket.off("messages")
      socket.disconnect()
    }
  }, [])

  useEffect(function () {

    messEnd.current?.scrollIntoView({ behavior: "smooth" })

  }, [messages])

  function _onSubmit(e) {
    e.preventDefault()
    socket.emit("message", { name, message })

    setMessage("")
  }
  return (
    <div className={[styles['chat-app']].join(' ')}>
      <div className={[styles['message-box'], styles.container].join(' ')}>
        {messages.map(i => <Message maxLength={messagelen} owner={i.name === name} name={i.name} message={i.message} key={v4()} />)}
        <div ref={messEnd}></div>
      </div>
      <div className={[styles['message-form'], styles.container, "_message-container"].join(' ')}>
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