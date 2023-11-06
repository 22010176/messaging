import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { v4 } from "uuid";

import './styles.scss'
import UserProfile from "./components/UserProfile";
import ContactProfile from "./components/ContactProfile";
import Button1 from "./components/Button1";
import Message from "./components/Message";
import image from '../../assets/imgs/test.jpg'

export default function () {
  // const { name: [name,], ...other } = useContext(AppContext)
  const [message, setMessage] = useState("")
  return (
    <div id="chat-app">
      <section className="content">
        <section className="contacts">
          <div className="others">
            {["a", "b", "c"].map(i => <ContactProfile key={v4()} image={image} name={i} last_mess="asdf" />)}
          </div>
          <UserProfile image={image} name={name} />
        </section>
        <section className="chats">
          <div className="chat-container">
            {Array(100).fill().map(i => <Message key={v4()} date={Date()} image={image} content="teasdfasfdasdfasfasdfasdfasfasdfasfdadfsasdfst" name={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} owner />)}
          </div>
          <div className="messages-input">
            <div className="input-form">
              <Button1 name={"+"} />
              <textarea className="input-filed" required value={message} cols={message?.length % 100} onChange={e => setMessage(e.value)} placeholder="Type your message here..." />
              <Button1 name={">"} />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}