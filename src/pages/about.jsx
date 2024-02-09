import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>This is my introduce!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
