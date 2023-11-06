import React from "react";
import 'reset-css'

import './styles.scss'

export default function ({ image = "", name = "" }) {
  return (
    <div className="self-pfp">
      <img src={image} className="user-avatar" alt="img not found" />
      <div className="user-info">{name}</div>
    </div>
  )
}