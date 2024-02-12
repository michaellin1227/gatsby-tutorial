import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Seo />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
