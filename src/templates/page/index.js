import React from 'react';
import Layout from '../../components/common/Layout';
import SEO from '../../components/SEO/SEO';
import Globals from '../../../globals';


const Page = ({ pageContext }) => {
  const {
    page: { title, content, uri, seo = {} },
  } = pageContext;
  const pageURL = `${Globals.siteURI}${uri}`;
  seo.canonical = pageURL;
  seo.opengraphUrl = pageURL;
  seo.opengraphType = `website`;
  return (
    <Layout>
      <SEO seo={seo}/>
      <h1> {title} </h1>
      <div className={'responsive themeLink'} dangerouslySetInnerHTML={{ __html: content }}/>
    </Layout>
  );
};

export default Page;
