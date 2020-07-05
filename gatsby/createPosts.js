const {
  PostTemplateFragment,
  BlogPreviewFragment,
} = require('../src/templates/posts/data.js');

const postTemplate = require.resolve('../src/templates/posts/single.js');
const blogTemplate = require.resolve('../src/templates/posts/blog.js');

const { log } = require('./utils.js');

const GET_POSTS = `
# Define our query variables
query GET_POSTS($first:Int $after:String) {
  wpgraphql {
    # Ask for posts
    posts(
        # Ask for the first XX number of posts
        first: $first

        # A Cursor to where in the dataset our query should start
        # and get items _after_ that point
        after:$after
    ) {
        # In response, we'll want pageInfo so we know if we need
        # to fetch more posts or not.
        pageInfo {
            # If true, we need to ask for more data.
            hasNextPage

            # This cursor will be used for the value for $after
            # if we need to ask for more data
            endCursor
        }
        nodes {
            uri

            # This is the fragment used for the Post Template
            ...PostTemplateFragment

            #This is the fragment used for the blog preview on archive pages
            ...BlogPreviewFragment
        }
    }
  }
}
# Here we make use of the imported fragments which are referenced above
${PostTemplateFragment}
${BlogPreviewFragment}
`;

const SITE_META = `
  site {
    siteMetadata {
      title
      description
      author
      twitter
      siteUrl
      wordPressUrl
      menuName
      mailChimpEndpoint
      blogURI
    }
  }
`;

/**
 * Array to store allPosts. We make paginated requests
 * to WordPress to get allPosts, and once we have all posts,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPosts = [];

/**
 * Here we store an array of blogPages. For each xx amount of posts
 * we want to create a blogPage so users can browse
 * chunks of data at a time, much like a traditional
 * WordPress paginated archive page.
 *
 * @type {Array}
 */
const blogPages = [];

/**
 * We need to track the page number so we can output the paginated
 * archive template with the appropriate path.
 *
 * @type {number}
 */
let pageNumber = 0;
/**
 * Number of posts Per page
 *
 * @var  {number}
 */
const itemsPerPage = 9;

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */

module.exports = async ({ actions, graphql }, options) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const { createPage } = actions;

  /**
   * Make sure the blogURI setting doesn't have
   * a leading slash. GatsbyLink needs the leading slash
   * on the client, but createPages expects *no* leading slash.
   */
  const blogURI = options.blogURI.replace(/^\//, '');

  /**
   * Fetch posts using the GET_POSTS query and the variables passed in.
   */
  const fetchPosts = async (variables) => graphql(GET_POSTS, variables).then(({ data }) => {
    /**
     * Extract the data from the GraphQL query results
     */
    const {
      wpgraphql: {
        posts: {
          nodes,
          pageInfo: { hasNextPage, endCursor },
        },
      },
    } = data;

    /**
     * Define the path for the paginated blog page.
     * This is the url the page will live at
     * @type {string}
     */
    const blogPagePath = !variables.after
      ? `${blogURI}/`
      : `${blogURI}/page/${pageNumber + 1}`;

    /**
     * Add config for the blogPage to the blogPage array
     * for creating later
     *
     * @type {{
     * path: string,
     * component: string,
     * context: {nodes: *, pageNumber: number, hasNextPage: *}
     * }}
     */
    blogPages[pageNumber] = {
      path: blogPagePath,
      component: blogTemplate,
      context: {
        nodes,
        pageNumber: pageNumber + 1,
        hasNextPage,
        itemsPerPage: options.itemsPerPage || itemsPerPage ,
        allPosts,
      },
    };
    /**
     * Map over the posts for later creation
     */
    nodes
    && nodes.map((post) => {
      allPosts.push(post);
    });

    /**
     * If there's another page, fetch more
     * so we can have all the data we need.
     */
    if (hasNextPage) {
      pageNumber++;
      log('fetch page', '#02f56b', `${pageNumber} of posts...`);
      return fetchPosts({ first: options.itemsPerPage || itemsPerPage, after: endCursor });
    }

    /**
     * Once we're done, return all the posts
     * so we can create the necessary pages with
     * all the data on hand.
     */
    return allPosts;
  });

  /**
   * Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual post pages
   * and paginated blogroll archive pages.
   */
  await fetchPosts({ first: options.itemsPerPage || itemsPerPage, after: null }).then((posts) => {
    /**
     * Map over the posts array to create the
     * single-post pages
     */
    // eslint-disable-next-line no-unused-expressions
    posts
    && posts.map((post) => {
      /**
       * Build post path based of theme blogURI setting.
       */
      const path = options.blogURI.length
        ? `${blogURI}${post.uri}`
        : `${post.uri}`;

      createPage({
        path,
        component: postTemplate,
        context: post,
      });
      log('created post', '#02f56b', `${path}`);
    });
    log('POSTS TOTAL', '#008a8f', `${posts.length}`, true);

    /**
     * Map over the `blogPages` array to create the
     * paginated blogroll pages
     */
    // eslint-disable-next-line no-unused-expressions
    blogPages
    && blogPages.map((archivePage) => {
      if (archivePage.context.pageNumber === 1) {
        archivePage.context.publisher = true;
        archivePage.context.label = archivePage.path.replace('/', '');
      }
      createPage(archivePage);
      log('created blog archive page', '#02f56b', `${archivePage.context.pageNumber}`);
    });
  });
};
