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
    <SEO title="home" />
    <h1>Hi all</h1>
    <p>Welcome to my portfolio</p>
    <p>This is the beginnings of what will become a portfolio / blog to showcase my work ( and just have some fun ).</p>
    <div css={divCSS}>
      <Image />
    </div>
    <Link to="/blog/">Go to blog</Link>
  </Layout>
)

export default IndexPage
