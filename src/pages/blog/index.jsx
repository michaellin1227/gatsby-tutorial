import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { Link, graphql } from "gatsby"

const Index = ({ data }) => {
  return (
    <Layout pageTitle="My Index Posts">
      <p>我的部落格頁面</p>
      {data.allMdx.nodes.map((d) => {
        return (
          <article key={d.id}>
            <Link to={`/blog/${d.frontmatter.slug}`}>
              {d.frontmatter.title}
            </Link>
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
export default Index
