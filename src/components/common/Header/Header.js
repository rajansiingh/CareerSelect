import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Menu from "../../Menu/Menu"
import c from "./Header.module.scss"

const Header = ({ siteTitle }) => {
  return(
    <header className={c.header}>
      <div className={c.site_Title}>
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
        <a id="nav-toggle" href="#" className={c.toggle_Nav} onClick={() => {
          document.getElementById("nav-toggle").classList.toggle(c.active)
          document.getElementsByClassName("navigation")[0].classList.toggle(c.active)
        }}><span/></a>
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
