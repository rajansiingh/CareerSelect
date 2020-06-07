const createPages = require("./gatsby/createPages")
const createPosts = require("./gatsby/createPosts")
const createUsers = require(`./gatsby/createUsers`)
const createCategories = require(`./gatsby/createCategories`)
const createTags = require(`./gatsby/createTags`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {
  await createPages({ actions, graphql, reporter }, options)
  await createPosts({ actions, graphql, reporter }, options)
  await createUsers({ actions, graphql, reporter }, options)
  //await createCategories({ actions, graphql, reporter }, options)
  //await createTags({ actions, graphql, reporter }, options)
}

exports.createResolvers = (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
