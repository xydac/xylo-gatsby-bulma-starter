import { Navbar } from 'bloomer/lib/components/Navbar/Navbar'
import { NavbarBrand } from 'bloomer/lib/components/Navbar/NavbarBrand'
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd'
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem'
import { NavbarMenu } from 'bloomer/lib/components/Navbar/NavbarMenu'
import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <Navbar
    isTransparent="true"
    className="is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <NavbarBrand>
      <NavbarItem>
        <Link to="/">{siteTitle}</Link>
      </NavbarItem>
    </NavbarBrand>
    <NavbarMenu>
      <NavbarEnd>
        <Link to="/page-2" className="navbar-item is-secondary">
          Page 2
        </Link>
        <Link to="/login" className="navbar-item is-secondary">
          Login
        </Link>
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>
)

export default Header
