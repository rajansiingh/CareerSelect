import React from 'react';
import Layout from '../../components/common/Layout';
import Listing from '../../components/common/Listing/Listing';
import Pagination from '../../components/Pagination';
import SEO from '../../components/SEO/SEO';
import {authorURI} from '../../../globals';

const Blog = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext;
  const blogPagePath = hasNextPage
    ? `${authorURI}/`
    : `${authorURI}/page/${pageNumber + 1}`;
  const seo = {
    title: 'Author Page',
    description: 'Authors posts',
    canonical: blogPagePath,
    opengraphUrl:  blogPagePath,
    opengraphType: 'website'
  };
  return (
    <Layout>
      <SEO seo={seo}/>
      <div className='listing-page row'>{nodes && nodes.map(post => <Listing key={post.postId} data={post}
                                                                             type={['withAuthor', 'withDesc']}/>)}</div>
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
