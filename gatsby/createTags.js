const { log } = require('./utils');
const { BlogPreviewFragment } = require('../src/templates/posts/data.js');

const tagTemplate = require.resolve('../src/templates/tags/index.js');

module.exports = async ({ actions, graphql },options) => {
  const GET_TAGS = `
    query GET_TAGS($first: Int, $after: String) {
      wpgraphql {
        tags(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
            tagId
            slug
            name
            posts {
              nodes {
                ...BlogPreviewFragment
              }
            }
          }
        }
      }
    }
    ${BlogPreviewFragment}
  `;
  const { createPage } = actions;
  const allTags = [];
  const fetchTags = async (variables) => graphql(GET_TAGS, variables).then(({ data }) => {
    const {
      wpgraphql: {
        tags: {
          nodes,
          pageInfo: { hasNextPage, endCursor },
        },
      },
    } = data;
    nodes.map((tag) => {
      allTags.push(tag);
    });

    if (hasNextPage) {
      return fetchTags({ first: 100, after: endCursor });
    }
    return allTags;
  });

  await fetchTags({ first: 100, after: null }).then((tags) => {
    tags.map((tag) => {
      createPage({
        path: `${options.tagsURI}/${tag.slug}`,
        component: tagTemplate,
        context: tag,
      });
      log('created tag', '#02f56b', `${tag.slug}`);
    });
    log('TAG TOTAL', '#a36700', `${tags.length}`, true);
  });
};
