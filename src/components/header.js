import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

const headerCSS = css`
  background: #011919;
  margin-bottom: 1.45rem;
`
const LinkCSS = css`
  color: white;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (
  <header css={headerCSS}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 css={css`margin: 0;`}>
        <Link to="/" css={LinkCSS}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
