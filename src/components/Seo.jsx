import * as React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { useSiteMetadata } from "../data/use-metadata"

const Seo = ({ title }) => {
  const { title: defaultTitle, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    url: siteUrl,
  }

  return (
    <title>
      {/*{title} | {data.site.siteMetadata.title}*/}
      {seo.title}
    </title>
  )
}

export default Seo
