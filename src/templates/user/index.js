import React from "react"
import Layout from "../../components/common/Layout"
import Listing from "../../components/common/Listing/Listing"
import SEO from "../../components/SEO/SEO"

const User = ({ pageContext }) => {
  const { posts: { nodes } } = pageContext

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Blog posts"
        keywords={[`blog`]}
      />
      {nodes && nodes.map(post => <Listing key={post.postId} data={post} type={["withAuthor", "withDesc"]}/>)}
    </Layout>
  )
}

export default User
