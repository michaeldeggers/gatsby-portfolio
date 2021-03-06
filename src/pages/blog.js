import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="blog" />
    <h1>Hi from the second page</h1>
    <p>Welcome to the blog... no content yet... (╯°□°)╯︵ ┻━┻</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
