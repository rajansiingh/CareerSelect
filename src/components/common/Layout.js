import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './Header/Header';
import s from './Layout.module.scss';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={s.siteContainer}>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div className={s.mainContainer}>
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
