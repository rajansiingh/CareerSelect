import React from "react"

const Footer = () => (
    <footer className='page-footer'>
      © {new Date().getFullYear()}, CareerSelect
      Built with <span role={"img"} aria-label={"love"}>❤️</span> in
      <span role={"img"} aria-label={"India"}> 🇮🇳 </span>
    </footer>
)

export default Footer
