const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    content
    link
    featuredImage {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(maxWidth: 1024) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
        id
      }
    }
    tags {
      nodes {
        slug
        name
        id
      }
    }
    author {
      name
      avatar(size:50) {
        url
      }
      slug
    }
  }
`;

const BlogPreviewFragment = `
  fragment BlogPreviewFragment on WPGraphQL_Post {
    id
    postId
    title
    uri
    date
    slug
    excerpt
    content
    featuredImage {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(maxWidth: 1024) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
    author {
      name
      avatar(size:50) {
        url
      }
      slug
    }
  }
`;

const SEOTemplateFragment = `
fragment SEOTemplateFragment on WPGraphQL_Post {
    seo {
          canonical
          focuskw
          metaDesc
          metaKeywords
          metaRobotsNofollow
          metaRobotsNoindex
          opengraphModifiedTime
          opengraphPublishedTime
          title
          twitterDescription
          twitterTitle
          opengraphAuthor
          opengraphDescription
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          twitterImage {
            altText
            link
          }
     }
}`

module.exports.PostTemplateFragment = PostTemplateFragment;
module.exports.BlogPreviewFragment = BlogPreviewFragment;
module.exports.SEOTemplateFragment = SEOTemplateFragment;
