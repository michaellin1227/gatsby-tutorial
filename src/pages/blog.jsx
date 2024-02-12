import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>我的部落格頁面</p>
      {data.allMdx.nodes.map((d) => {
        return (
          <article key={d.id}>
            <h2>{d.frontmatter.title}</h2>
            <p>Posted: {d.frontmatter.date}</p>
            <p>{d.excerpt}</p>
          </article>
        )
      })}
    </Layout>
  )
}

export const Head = () => <Seo />

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
        id
        excerpt
        parent {
          ... on File {
            modifiedTime
          }
        }
      }
    }
  }
`
export default Blog
