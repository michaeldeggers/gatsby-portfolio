import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const divCSS = css`
  max-width: 300px; 
  margin-bottom: 1.45rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div css={divCSS}>
      <Image />
    </div>
    <Link to="/blog/">Go to blog</Link>
  </Layout>
)

export default IndexPage
