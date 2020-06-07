// import React from "react"
// // import SiteLayout from "../components/SiteLayout"
// // import { Row, Col } from "antd"
// import { graphql } from "gatsby"
// // import CategoriesWidget from "../components/CategoriesWidget"
// // import RecentCommentsWidget from "../components/RecentCommentsWidget"
// // import RecentPostsWidget from "../components/RecentPostsWidget"
// // import PostEntry from "../components/PostEntry"
// // import Seo from "../components/Seo"
//
// const User = props => {
//   const {
//     location,
//     data: {
//       wpgraphql: { user },
//     },
//   } = props
//   console.log(props);
//   return (
//     <div>
//       {user.name}
//     </div>
//   )
// }
//
// export default User
//
// export const pageQuery = graphql`
//   query user($id: ID!) {
//     wpgraphql {
//       user(id: $id) {
//         name
//         avatar {
//           url
//         }
//       }
//     }
//   }
// `
