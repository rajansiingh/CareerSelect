import React from "react"
import Layout from "../../components/common/Layout"
import SEO from "../../components/SEO/SEO"


const Page = ({ pageContext }) => {
  const {
    page: { title, content },
  } = pageContext
  return (
    <Layout>
      <SEO title={title}/>
      <h1> {title} </h1>
      <div className={'responsiveImage'} dangerouslySetInnerHTML={{ __html: content }}/>
    </Layout>
  )
}

export default Page
