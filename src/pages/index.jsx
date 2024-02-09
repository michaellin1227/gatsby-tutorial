import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my Gatsby site!</p>
      <StaticImage src="../images/waterpig.jpeg" alt="the waterpig!" />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
