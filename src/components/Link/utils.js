import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { domToReact } from 'html-react-parser';
const linksToReplace = ['content.careerselect.in'];
export const options = {
  replace: ({ type, name, attribs, children }) => {
    if (type === "tag" && name === "a") {
      const link = attribs.href;
      const linkInArray = linksToReplace.find((url) => {
        return link.indexOf(url) > -1
      })
      if (linkInArray) {
        const url = link.replace(new RegExp(`^(http|https)://${linkInArray}`) , '');
        return (
          <GatsbyLink to={`/blog/${url}`}>
            {domToReact(children, options)}
          </GatsbyLink>
        )
      }
    }
    return;
  },
}
