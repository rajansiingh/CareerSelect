const fs = require("fs")
const { createRemoteFileNode } = require("gatsby-source-filesystem")
const createPosts = require("./gatsby/createPosts")
const createPages = require("./gatsby/createPages")
const createCategories = require("./gatsby/createCategories")
const createTags = require("./gatsby/createTags")
const createUsers = require("./gatsby/createUsers")
const urlOptions = require("./globals")

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const mergedOptions = {
    ...urlOptions,
    ...options,
  }
  await createPosts({ actions, graphql }, mergedOptions)
  await createCategories({ actions, graphql }, mergedOptions)
  await createTags({ actions, graphql }, mergedOptions)
  await createUsers({ actions, graphql }, mergedOptions)
  await createPages({ actions, graphql, reporter }, mergedOptions)
}

exports.createResolvers = ({
                             actions,
                             cache,
                             createNodeId,
                             createResolvers,
                             store,
                             reporter,
                           }) => {
  const { createNode } = actions
  createResolvers({
    /**
     * Create local Gatsby images so we can run operations on them.
     */
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        resolve(source) {
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

exports.onPreBootstrap = async ({ reporter }) => {
  if (fs.existsSync("src/images")) return

  fs.mkdir("src/images", { recursive: true }, (err) => {
    if (err) reporter.warn("Directory creation failed. Please create \"./src/images\" and restart Gatsby.")
  })
}
