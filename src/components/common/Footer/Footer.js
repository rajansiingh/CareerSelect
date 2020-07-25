import React from "react"
import s from "./Footer.module.scss"

const Footer = () => {
  return (<footer className={s.pageFooter}>
    © {new Date().getFullYear()}, CareerSelect
    Built with <span role={"img"} aria-label={"love"}>❤️</span> in
    <span role={"img"} aria-label={"India"}> 🇮🇳 </span>
  </footer>)
}

export default Footer
