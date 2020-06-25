import React from "react"
import Layout from "../../components/common/Layout"
import Listing from "../../components/common/Listing/Listing"
import SEO from "../../components/SEO/SEO"
const User = props => {
  const {
    pageContext: { name, posts },
  } = props
  console.log('props-->',props);
  return (
    <Layout>
      <SEO
        title={`Author - ${name}`}
        description={`A collection of posts written by ${name}.`}
      />
        {posts.nodes &&
        posts.nodes.map(post => {
          return <Listing key={post.postId} data={post} type={["withDesc"]}/>
        })}
    </Layout>
  )
}

export default User
