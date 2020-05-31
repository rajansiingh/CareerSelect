import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `#bfbdc1`,
      marginBottom: `1.45rem`,
    }}
  >
    <footer>
      © {new Date().getFullYear()}, CareerSelect
      Built with <span role={"img"} aria-label={"love"}>❤️</span> in
      <span role={"img"} aria-label={"India"}> 🇮🇳 </span>
    </footer>
  </footer>
)

export default Footer
