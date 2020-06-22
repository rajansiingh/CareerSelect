import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../Menu/Menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      position: 'fixed',
      width: '100vw',
      zIndex: '1',
    }}
  >
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a id="nav-toggle" href="#" onClick={()=>{
        document.getElementById('nav-toggle').classList.toggle( "active" )
        document.getElementsByClassName('navigation')[0].classList.toggle( "active" )
      }}><span></span></a>
    </div>

    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
