/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"

const siteCSS = css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
const contentCSS = css`
  margin: 0;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem; 
  flex: 1;
`
const mainCSS = css`
  margin: 0;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem; 
  flex: 1;
`

const footerCSS = css`
  text-align: center;
  padding: 1rem 0; 
`

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
      {/*<div css={contentCSS}>*/}
        <main css={mainCSS}>{children}</main>
        <footer css={footerCSS}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      {/*</div>*/}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
