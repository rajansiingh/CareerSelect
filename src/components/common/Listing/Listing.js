import React from "react"
import { Link } from "gatsby"
import * as dayjs from "dayjs"
import { blogURI, authorURI, categoryURI, tagsURI } from "../../../../globals"
import FluidImage from "../../Image/FluidImage"
import parse from 'html-react-parser';
import s from "./Listing.module.scss"
import { options } from "../../Link/utils"


const Listing = ({ data, type = [] }) => {

  const nodeMapper = (data = [], URI) => {
    return data.map((node) => {
      return (
        <Link className={s.tags} to={`${URI}/${node.slug}/`} key={node.id}>
          {node.name}
        </Link>
      )
    })
  }
  const { uri, title, featuredImage, excerpt, author, categories, tags, date } = data
  const withAuthor = type.indexOf("withAuthor") > -1
  const withDesc = type.indexOf("withDesc") > -1 || true
  const withTags = type.indexOf("withTags") > -1 || true
  const withCategory = type.indexOf("withCategory") > -1 || true
  const withDate = type.indexOf("withDate") > -1 || true
  const displayDate = dayjs(date).format("MMM DD, YYYY")

  const List = <div className={s.listing}>
    <header className={'responsiveImage'}>
      <Link to={`${blogURI}/${uri}/`}>
        {featuredImage && <FluidImage image={featuredImage} style={{ margin: 0 }} alt={title}/>}
        <h2>{title}</h2>
      </Link>
    </header>
    {withTags && tags && nodeMapper(tags.nodes, tagsURI)}
    <div className='list-desc'>
      {withDate && date && displayDate}
      {withDesc && excerpt && <div className={s.desc}>{parse(excerpt, options)}</div>}
      {withAuthor && author && <div>
        By:
        <Link to={`${authorURI}/${author.slug}/`}>
          {author.avatar.url && <img src={author.avatar.url} alt={author.name || ''}/>} {author.name}
        </Link>
      </div>}
      {withCategory && categories && nodeMapper(categories.nodes, categoryURI)}
    </div>
  </div>

  return (
    <React.Fragment>
      {List}
    </React.Fragment>
  )
}

export default Listing
