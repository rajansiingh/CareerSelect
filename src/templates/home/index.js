import React from 'react';
import Layout from '../../components/common/Layout';
import SEO from '../../components/SEO/SEO';

const Home = () => {
  return (
    <Layout fullWidth="true" className='responsive'>
      <SEO title="Home"/>
      This is Dynamic generated Home Page
    </Layout>
  );
};

export default Home;
