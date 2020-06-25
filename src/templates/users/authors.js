import React from "react"
import Layout from "../../components/common/Layout"
import Listing from "../../components/common/Listing/Listing"
import Pagination from "../../components/Pagination"
import SEO from "../../components/SEO/SEO"

const Blog = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext
  console.log({ nodes, pageNumber, hasNextPage, itemsPerPage, allPosts });
  return (
    <Layout>
      <SEO
        title="Author Page"
        description="Authors posts"
        keywords={[`author`]}
      />
      {nodes && nodes.map(post => <Listing key={post.postId} data={post} type={["withAuthor", "withDesc"]}/>)}
      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allPosts={allPosts}
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  )
}

export default Blog
