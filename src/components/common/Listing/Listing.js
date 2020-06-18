import React, { Fragment } from "react"
import { Link } from "gatsby"
import * as dayjs from "dayjs"
import { blogURI, authorURI, categoryURI, tagsURI } from "../../../../globals"
import FluidImage from "../../Image/FluidImage"

const Listing = ({ data, type = [] }) => {

  const nodeMapper = (data = [], URI) => {
    return data.map((node) => {
      return (
        <Link to={`${URI}/${node.slug}/`} key={node.id}>
          {node.name}
        </Link>)
    })
  }
  const { uri, title, featuredImage, excerpt, author, categories, tags, date } = data
  //console.log("---->", data)
  //console.log("---->", type)
  const withAuthor = type.indexOf("withAuthor") > -1
  const withDesc = type.indexOf("withDesc") > -1 || true
  const withTags = type.indexOf("withTags") > -1 || true
  const withCategory = type.indexOf("withCategory") > -1 || true
  const withDate = type.indexOf("withDate") > -1 || true
  const displayDate = dayjs(date).format("MMM DD, YYYY")
  const List = (<Fragment>
    <header>
      <Link to={`${blogURI}/${uri}/`}>
        <h2 style={{ marginBottom: "5px" }}>{title}</h2>
        {featuredImage && <FluidImage image={featuredImage} style={{ margin: 0 }}/>}
      </Link>
    </header>
    {withTags && tags && nodeMapper(tags.nodes, tagsURI)}
    {withDesc && excerpt && <div dangerouslySetInnerHTML={{ __html: excerpt }}/>}
    {withAuthor && author && <div>
      By:
      <Link to={`${authorURI}/${author.slug}/`}>
        {author.name}
      </Link>
    </div>}
    {withCategory && categories && nodeMapper(categories.nodes, categoryURI)}
    {withDate && date && displayDate}
  </Fragment>)
  return (
    <div style={{ marginBottom: "30px" }}>
      {List}
    </div>
  )
}

export default Listing
