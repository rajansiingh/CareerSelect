let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`)


module.exports = {
  siteMetadata: {
    siteUrl: `https://careerselect.in`,
    title: `Career Select`,
    description: `Building Your Career`,
    author: `Rajan Singh`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Career Select`,
        short_name: `Career Select`,
        description: `Building Your Career`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#f23f2d`,
        display: `minimal-ui`,
        icon: `src/images/careerselect.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `https://content.careerselect.in/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171063877-1",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `PT Sans`,
          `source Regular\:400` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-sitemap'
  ],
}
