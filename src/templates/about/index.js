import React from 'react';
import Layout from '../../components/common/Layout';
import SEO from '../../components/SEO/SEO';

const About = ({ location }) => {
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="About"/>
      This is about page
    </Layout>
  );
};

export default About;
