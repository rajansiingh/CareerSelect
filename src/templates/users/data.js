const UserPreviewFragment = `
    fragment UserPreviewFragment on WPGraphQL_User {
        name
        avatar {
          url
        }
        posts {
          nodes {
            id
            postId
            title
            uri
            date
            slug
            excerpt
            content
            featuredImage
          }
        }
    }
`;
module.exports.UserPreviewFragment = UserPreviewFragment;
