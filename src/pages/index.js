/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const divCSS = {
  maxWidth: `300px`,
  marginBottom: `1.45rem`
}

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <div>
      <h1>Hi all</h1>
    </div>
    <p>Welcome to my portfolio</p>
    <p>This is the beginnings of what will become a portfolio / blog to showcase my work ( and just have some fun ).</p>
    <div css={divCSS}>
      <Image />
    </div>
    <div>
      <button sx={{variant: 'buttons.primary'}}>Push Me</button>
    </div>
    <Link to="/blog/">Go to blog</Link>
  </Layout>
)

export default IndexPage
