import React from "react";
import 'reset-css'

import './styles.scss'
import { v4 } from "uuid";

export default function ({ image = "", name = "", last_mess = "" }) {
  return (
    <div className="contact-pfp">
      <img src={image} className="user-avatar" alt="img not found" />
      <div>
        <div className="user-info">{name}</div>
        <div className="last-message">{last_mess}</div>
      </div>
    </div >
  )
}