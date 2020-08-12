import React from 'react';
import cx from 'classnames';
import Layout from '../../components/common/Layout';
// import Layout from '../../components/Layout'
// import PostEntryMeta from '../../components/PostEntryMeta'
// import PostEntryTitle from '../../components/PostEntryTitle'
// import PostEntryMedia from '../../components/PostEntryMedia'
// import BelowPost from '../../components/BelowPost'
import SEO from '../../components/SEO/SEO';
import UniversalLink from '../../components/Link/UniversalLink';
import Globals from '../../../globals';
import * as dayjs from 'dayjs';
import SocialShare from '../../components/SocialShare/SocialShare';
import s from './post.module.scss';
import { CommentCount, DiscussionEmbed } from 'disqus-react';
import { Link } from 'gatsby';


const Post = ({ pageContext: post }) => {
  const { seo = {}, date = new Date() } = post;
  const displayDate = dayjs(date).format('MMM D, YYYY h:mm A');
  const blogURL = `${Globals.siteURI}${Globals.blogURI}${post.uri}`;
  seo.canonical = blogURL;
  seo.opengraphUrl = blogURL;
  seo.opengraphType = 'article';
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.id, title: post.title },
  };
  return (
    <Layout>
      <SEO seo={seo}/>
      <article className={s.postContainer}>
        <div className={s.postDetails}>
          <div className={s.categoryDetails}>
            {
              post.categories.nodes.map((node) => {
                return (
                  <UniversalLink key={node.id} to={`${Globals.categoryURI}/${node.slug}`}>{node.name}</UniversalLink>);
              })
            }
          </div>
          <h1>
            {post.title}
          </h1>
          <div className={s.authorDetails}>
            <UniversalLink to={`${Globals.authorURI}/${post.author.slug}`}>By {post.author.name}</UniversalLink>
            {displayDate}
            <Link to={`${Globals.blogURI}${post.uri}#disqus_thread`}>
              <CommentCount {...disqusConfig} />
            </Link>
          </div>
        </div>
        <SocialShare urlToShare={blogURL}/>
        <div className={cx(s.contentContainer, 'responsive')} dangerouslySetInnerHTML={{ __html: post.content }}/>
        <Link name={`${Globals.blogURI}${post.uri}disqus_thread`}>
          <DiscussionEmbed {...disqusConfig} />
        </Link>
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
  );
};

export default Post;
