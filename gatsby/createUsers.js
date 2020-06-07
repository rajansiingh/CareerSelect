const path = require(`path`)
// const { UserPreviewFragment } = require("../src/templates/user/data.js")


module.exports = async ({ actions, graphql, reporter }, options) => {
  const GET_USERS = `
  query GET_USERS($first: Int) {
    wpgraphql { 
      users(first: $first) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes{
            name
            avatar {
              url
            }
            slug
            posts {
              nodes {
                id
                postId
                title
                uri
                date
                slug
                excerpt
              }
            }
        }
      }
    }
  }
  `
  const { createPage } = actions
  const allUsers = []
  const fetchUsers = async variables =>
    await graphql(GET_USERS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          users: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      console.log('----->',JSON.stringify(data));
      nodes.map(user => {
        allUsers.push(user)
      })
      if (hasNextPage) {
        return fetchUsers({ first: 100, after: endCursor })
      }
      return allUsers
    })


  await fetchUsers({ first: 100, after: null }).then(allUsers => {
    reporter.info(`Users fetched: ${allUsers.length}`)
    const userTemplate = path.resolve(`./src/templates/user/index.js`)
    allUsers.map(user => {
      reporter.info(`create user: ${user.slug}`)
      createPage({
        path: `/author/${user.slug}`,
        component: userTemplate,
        context: user,
      })
    })
  })
}
