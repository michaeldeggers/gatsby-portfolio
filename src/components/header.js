/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

const headerCSS = {
  marginBottom: `1.45rem`
}
const LinkCSS = {
  color: `white`,
  textDecoration: `none`,
}
const Header = ({ siteTitle }) => (
  <header
    css={headerCSS}
    sx={{
      bg: 'primary',
      fontFamily: 'heading'
    }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        <Link to="/" css={LinkCSS} sx={{color: '#fff'}}>
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
