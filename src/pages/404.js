import React from 'react';
import Layout from '../components/common/Layout';
import SEO from '../components/SEO/SEO';
import { blogURI } from '../../globals';
import UniversalLink from '../components/Link/UniversalLink';


const seo = {
  opengraphType: `website`,
  title: `404 - Not Found - Career Select`,
};
const NotFoundPage = () => (
  <Layout>
    <SEO seo={seo}/>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... Meanwhile you can read our
      <UniversalLink to={blogURI}>
        Blogs
      </UniversalLink>
    </p>
  </Layout>
);

export default NotFoundPage;
