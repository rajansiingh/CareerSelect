import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Menu from "../../Menu/Menu"
import c from "./Header.module.scss"

const Header = ({ siteTitle }) => {
  const toggleNav = () => {
    document.getElementById("nav-toggle").classList.toggle(c.active)
    document.getElementById("menu-navigation").classList.toggle("active")
  }
  return (
    <header className={c.header}>
      <div className={c.siteTitle}>
        <Link to="/">
          {siteTitle}
        </Link>
        <button id="nav-toggle" aria-label="toggle-btn" className={c.toggle_Nav} onClick={toggleNav}/>
      </div>
      <Menu/>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
