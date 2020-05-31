import React from "react"
import Layout from "../components/common/Layout"
import SEO from "../components/SEO/SEO"
import { blogURI } from "../../globals"
import UniversalLink from "../components/Link/UniversalLink"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... Meanwhile you can read our
      <UniversalLink to={blogURI}>
         Blogs
      </UniversalLink>
    </p>
  </Layout>
)

export default NotFoundPage
