import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-fixed-top is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item ">
          {siteTitle}
        </Link>
      </div>

      <div id="navbar-menu" className="navbar-menu is-static">
        <div className="navbar-end">
          <Link to="/page-2" className="navbar-item is-secondary">
            Page 2
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
