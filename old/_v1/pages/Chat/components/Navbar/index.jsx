import React from "react";
import 'reset-css'

import "./styles.scss"

export default function ({ children }) {

  return (
    <section className="navbar">
      {children}
    </section>
  )

}