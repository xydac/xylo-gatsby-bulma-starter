import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutUsPage = () => (
  <Layout>
    <section className="hero is-primary header-hero ">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">About Us</h1>
          <h2 className="subtitle">
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li className="is-active">
                  <Link to="/page-2">Page 2</Link>
                </li>
              </ul>
            </nav>
          </h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutUsPage
