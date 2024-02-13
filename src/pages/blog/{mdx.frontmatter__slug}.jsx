import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log(data.mdx.frontmatter.title)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
