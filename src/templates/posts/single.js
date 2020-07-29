import React from "react"
import cx from "classnames"
import Layout from "../../components/common/Layout"
// import Layout from '../../components/Layout'
// import PostEntryMeta from '../../components/PostEntryMeta'
// import PostEntryTitle from '../../components/PostEntryTitle'
// import PostEntryMedia from '../../components/PostEntryMedia'
// import BelowPost from '../../components/BelowPost'
import SEO from "../../components/SEO/SEO"
import UniversalLink from "../../components/Link/UniversalLink"
import Globals from "../../../globals"
import * as dayjs from "dayjs"
import SocialShare from "../../components/SocialShare/SocialShare"
import s from "./post.module.scss"

// const syntaxHighlighter = content => {
//   if (!content) {
//     return {
//       __html: '',
//     }
//   }
//
//   var regex = /\[javascript\]|\[php\]|\[html\]|\[css\]/g
//
//   var regex2 = /\[\/javascript\]|\[\/php\]|\[\/html\]|\[\/css\]/gi
//
//   return {
//     __html: content.replace(regex, '<code>').replace(regex2, '</code>'),
//   }
// }

const Post = ({ pageContext: post }) => {
  const displayDate = dayjs(post.date).format("MMM D, YYYY h:mm A")
  return (
    <Layout>
      <SEO title={`${post.title}`}/>
      <article className={s.postContainer}>
        <div className={s.postDetails}>
          <div className={s.categoryDetails}>
            {
              post.categories.nodes.map((node) => {
                return (<UniversalLink to={`${Globals.categoryURI}/${node.slug}`}>{node.name}</UniversalLink>)
              })
            }
          </div>
          <h1>
            {post.title}
          </h1>
          <div className={s.authorDetails}>
            <UniversalLink to={`${Globals.authorURI}/${post.author.slug}`}>By {post.author.name}</UniversalLink>
            {displayDate}
          </div>
        </div>
        <SocialShare urlToShare={`${Globals.siteURI}${Globals.blogURI}${post.uri}`}/>
        <div className={cx(s.contentContainer, "responsive")} dangerouslySetInnerHTML={{ __html: post.content }}/>
        {/*<PostEntryTitle*/}
        {/*  location="single"*/}
        {/*  post={post}*/}
        {/*  titleClass="entry-title"*/}
        {/*/>*/}

        {/*<PostEntryMeta post={post} />*/}


        {/*{post.featuredImage && <PostEntryMedia post={post} location="single" />}*/}

        {/*<BelowPost post={post} />*/}
      </article>
    </Layout>
  )
}

export default Post
