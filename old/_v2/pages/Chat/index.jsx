import { useContext, useEffect, useState } from 'react'
import { collection, doc, limit, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'

import './styles.scss'
import { AppContext } from '../App';
import { firestore } from '../../api';
import MessageConverter, { Message } from '../../api/models/Messages';
import { v4 } from 'uuid';

export default function () {
  const name = useContext(AppContext)
  const [mess, setMess] = useState();
  const [chats, setChats] = useState([])


  const messCol = collection(firestore, "messages")
  // 
  async function sendMessage(e) {
    e.preventDefault();

    await setDoc(doc(messCol), { content: mess, user: name.current, date: Date.now() })

    setMess("")
  }

  useEffect(function () {
    const mess = onSnapshot(query(messCol, orderBy('date', "desc"), limit(10)), data => {
      setChats(data.docs.map(i => i.data()))
    })
    return mess
  }, [])

  return (
    <div id='chat_page'>
      <div>{name.current}</div>
      <form onSubmit={sendMessage}>
        <textarea rows={3} cols={40} required value={mess} onChange={e => setMess(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div className='messages'>
        {chats.map(i => (
          <div key={v4()}>
            <div>{i.user}</div>
            <div>{i.content}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}