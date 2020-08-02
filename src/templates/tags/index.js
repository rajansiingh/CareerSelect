import React from 'react';
import Layout from '../../components/common/Layout';
import Listing from '../../components/common/Listing/Listing';
import SEO from '../../components/SEO/SEO';

const SingleTag = props => {
  const {
    pageContext: { name, posts },
  } = props;
  const seo = {
    title: `Tag - ${name}`,
    description: `A collection of posts from the ${name} tag.`,
    opengraphType: `website`,
    canonical: props.uri,
    opengraphUrl: props.uri
  };
  return (
    <Layout>
      <SEO seo={seo}/>
      {posts.nodes &&
      posts.nodes.map(post => {
        return <Listing key={post.postId} data={post} type={['withDesc']}/>;
      })}
    </Layout>
  );
};

export default SingleTag;

