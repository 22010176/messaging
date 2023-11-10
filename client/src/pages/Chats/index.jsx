import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'
import { v4 } from 'uuid';



export default function App() {
  const [name, setName] = useState("")

  useEffect(function () {
    const _name = localStorage.getItem('user')
    // console.log(_name)
    if (_name) setName(_name)
    else {
      setName(v4())
      localStorage.setItem('user', name);
    }
  }, [])


  return (
    <div className={[styles['chat-app']].join(' ')}>
      <div className={[styles['message-box'], styles.container].join(' ')}>

      </div>
      <div className={[styles['message-form'], styles.container].join(' ')}>
        <div className={styles['form-wrapper']}></div>
      </div>
    </div>
  );
}