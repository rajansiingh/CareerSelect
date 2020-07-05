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
`

module.exports.PageTemplateFragment = PageTemplateFragment
