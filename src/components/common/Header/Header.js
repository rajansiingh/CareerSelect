import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Menu from '../../Menu/Menu';
import c from './Header.module.scss';
import Button from '../Button/Button';

const Header = ({ siteTitle }) => {
  const toggleNav = () => {
    document.getElementById('menu-navigation').classList.toggle('active');
  };
  return (
    <header className={c.header}>
      <div className={c.siteTitle}>
        <Link to="/">
          {siteTitle}
        </Link>
        <Button id="nav-toggle" type="hamburger" containerClass={c.toggleNav} onClick={toggleNav}/>
      </div>
      <Menu/>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
