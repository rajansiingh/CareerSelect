import React from 'react';
import Layout from '../../components/common/Layout';
import Listing from '../../components/common/Listing/Listing';
import Pagination from '../../components/Pagination';
import SEO from '../../components/SEO/SEO';
import {blogURI} from '../../../globals'

const Blog = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext;
  const blogPagePath = hasNextPage
    ? `${blogURI}/`
    : `${blogURI}/page/${pageNumber + 1}`;
  const seo = {
    title: 'Blog - Career Select',
    description: 'Blog posts',
    canonical: blogPagePath,
    opengraphUrl:  blogPagePath
  };

  return (
    <Layout>
      <SEO seo={seo}/>
      {nodes && nodes.map(post => <Listing key={post.postId} data={post} type={['withAuthor', 'withDesc']}/>)}
      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allPosts={allPosts}
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  );
};

export default Blog;
