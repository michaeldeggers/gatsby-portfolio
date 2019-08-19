/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { jsx } from "theme-ui"

const siteCSS = {
  display: `flex`,
  margin: 0,
  padding: 0,
  minHeight: `100vh`,
  flexDirection: `column`,
}
const mainCSS = {
  margin: 0,
  maxWidth: `960px`,
  padding: `0 1.0875rem 1.45rem`,
  flex: 1,
}
const footerCSS = {
  textAlign: `center`,
  padding: `1rem 0`
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div css={siteCSS}>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main css={mainCSS}>{children}</main>
        <footer css={footerCSS} sx={{bg: 'primary', color: '#fff'}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
