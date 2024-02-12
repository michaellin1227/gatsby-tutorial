import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>我的部落格頁面</p>
      <ul>
        {data.allFile.nodes.map((d) => {
          return <li key={d.name}>{d.name}</li>
        })}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo />

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default Blog
