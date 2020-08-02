const { log } = require('./utils');
const { PageTemplateFragment, SEOTemplateFragment } = require('../src/templates/page/data.js');
const pageTemplate = require.resolve('../src/templates/page/index.js');
// const homeTemplate = require.resolve('../src/templates/home/index.js');
// const aboutTemplate = require.resolve('../src/templates/about/index.js');
// const contactTemplate = require.resolve('../src/templates/contact/index.js');

const GET_PAGES = `
  # Define our query variables
  query GET_PAGES($first:Int $after:String) {
    wpgraphql {
      # Ask for pages
      pages(
          # Ask for the first XX number of pages
          first: $first

          # A Cursor to where in the dataset our query should start
          # and get items _after_ that point
          after:$after
      ) {
          # In response, we'll want pageInfo so we know if we need
          # to fetch more pages or not.
          pageInfo {
              # If true, we need to ask for more data.
              hasNextPage

              # This cursor will be used for the value for $after
              # if we need to ask for more data
              endCursor
          }
          nodes {
              uri

              # This is the fragment used for the pages Template
              ...SEOTemplateFragment
              
              # This is the fragment used for the pages Template
              ...PageTemplateFragment

          }
      }
    }
  }
  # Here we make use of the imported fragments which are referenced above
  ${SEOTemplateFragment}
  ${PageTemplateFragment}
`;

/**
 * Array to store allpagess. We make paginated requests
 * to WordPress to get allpagess, and once we have all pages,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPages = [];

/**
 * We track the page number so we can output the page number to the console.
 *
 * @type {number}
 */
let pageNumber = 0;
const itemsPerPage = 9;

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql, reporter }, options) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const { createPage } = actions;

  /**
   * Fetch pages method. This accepts variables to alter
   * the query. The variable `first` controls how many items to
   * request per fetch and the `after` controls where to start in
   * the dataset.
   *
   * @param variables
   * @returns {Promise<*>}
   */
  const fetchPages = async (variables) =>
    /**
     * Fetch pages using the GET_PAGES query and the variables passed in.
     */
    await graphql(GET_PAGES, variables).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        wpgraphql: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      /**
       * Map over the pages for later creation
       */
      nodes
      && nodes.map((pages) => {
        allPages.push(pages)
      })

      /**
       * If there's another page, fetch more
       * so we can have all the data we need.
       */
      if (hasNextPage) {
        pageNumber++
        reporter.info(`fetch page ${pageNumber} of pages...`)
        return fetchPages({ first: options.itemsPerPage || itemsPerPage, after: endCursor })
      }

      /**
       * Once we're done, return all the pages
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allPages;
    });
  // let pageSlugIndex = 2;
  // let wantedSlug = false;
  // const maybeGenerateNewSlug = (slug, allPages) => {
  //   /**
  //    * Store page slug for later use.
  //    */
  //   if (!wantedSlug) {
  //     wantedSlug = slug;
  //   }
  //
  //   /**
  //    * Check to see if there is slug conflict.
  //    */
  //   const hasMatch = allPages.filter((page) => slug === page.uri);
  //
  //   /**
  //    * If there is, recusivley call maybeGenerateNewSlug() until there isn't.
  //    */
  //   if (hasMatch.length) {
  //     const newSlug = `${wantedSlug}-${pageSlugIndex}`;
  //     pageSlugIndex++;
  //     return maybeGenerateNewSlug(newSlug, allPages);
  //   }
  //   return slug;
  // };

  /**
   * Kick off our `fetchPages` method which will get us all
   * the pages we need to create individual pages.
   */
  const wpPages = await fetchPages({ first: options.itemsPerPage || itemsPerPage, after: null });


  /**
   * Map over the allPages array to create the
   * single pages.
   * We create these if we have a menu from WP or the wpPages option is set to true.
   */

    wpPages.map((page) => {
      let pagePath = `${page.uri}`
      /**
       * If WordPress has a page that matches the blogURI setting,
       * The blogURI should override the pages.
       */
      if (page.uri === options.blogURI.replace('/', '')) {
        reporter.warn(`Page slug matches your blogURI setting. Page with the slug "${page.uri}" will not be created.`);
        return;
      }

      /**
       * If the page is the front page, the page path should not be the uri,
       * but the root path '/'.
       */
      if(page.isFrontPage || pagePath === '/home/') {
        pagePath = '/'
      }

      createPage({
        path: pagePath,
        component: pageTemplate,
        context: {
          page: page,
        },
      });
      log('created page', '#d98900', `${page.uri}`);
    });
    log('PAGES TOTAL', '#d98900', `${wpPages.length}`, true);


  /**
   * Build publisher starter pages if enabled.
   */
  // if (options.starterPages) {
  //   /**
  //    * Make sure there are no slug confilcts.
  //    */
  //   const aboutPath = options.wpPages ? maybeGenerateNewSlug('about', wpPages) : 'about';
  //   const contactPath = options.wpPages ? maybeGenerateNewSlug('contact', wpPages) : 'contact';
  //
  //   createPage({
  //     path: `/${aboutPath}`,
  //     component: aboutTemplate,
  //     context: {
  //       publisher: true,
  //       label: 'About',
  //     },
  //   });
  //   log('created publisher theme page', '#02f56b', 'about');
  //
  //   createPage({
  //     path: `/${contactPath}`,
  //     component: contactTemplate,
  //     context: {
  //       publisher: true,
  //       label: 'Contact',
  //     },
  //   });
  //   log('created publisher theme page', '#02f56b', 'home');
  // }

  /**
   * If the blog isn't on the home page,
   * create a basic homepage.
   */
  // if (options.blogURI.length && options.blogURI !== '/') {
  //   createPage({
  //     path: '/',
  //     component: homeTemplate,
  //     context: {
  //       publisher: true,
  //       label: 'Home',
  //     },
  //   });
  // }
};
