import React from "react"
import Layout from "../../components/common/Layout"
import Listing from "../../components/common/Listing/Listing"
import SEO from "../../components/SEO/SEO"

const SingleCategory = props => {
  const {
    pageContext: { name, posts },
  } = props

  return (
    <Layout>
      <SEO
        title={`Category - ${name}`}
        description={`A collection of posts from the ${name} category.`}
      />
      {posts.nodes &&
      posts.nodes.map(post => {
        return <Listing key={post.postId} data={post} type={["withDesc"]}/>
      })}
    </Layout>
  )
}

export default SingleCategory

