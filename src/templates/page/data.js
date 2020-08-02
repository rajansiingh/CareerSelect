const PageTemplateFragment = `
    fragment PageTemplateFragment on WPGraphQL_Page {
        id
        title
        pageId
        content
        uri
        slug
        isFrontPage
        featuredImage {
            sourceUrl
            altText
        }
    }
`;

const SEOTemplateFragment = `
fragment SEOTemplateFragment on WPGraphQL_Page {
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

module.exports.PageTemplateFragment = PageTemplateFragment;
module.exports.SEOTemplateFragment = SEOTemplateFragment;
