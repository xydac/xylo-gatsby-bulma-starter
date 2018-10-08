import { Nav } from 'bloomer/lib/components/Nav/Nav'
import { Title } from 'bloomer/lib/elements/Title'
import { Column } from 'bloomer/lib/grid/Column'
import { Columns } from 'bloomer/lib/grid/Columns'
import { Container } from 'bloomer/lib/layout/Container'
import { Hero } from 'bloomer/lib/layout/Hero/Hero'
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody'
import { Section } from 'bloomer/lib/layout/Section'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const AboutUsPage = ({ data }) => (
  <Layout>
    <Hero isColor="primary" isSize="small">
      <HeroBody>
        <Container>
          <Title>{data.site.siteMetadata.title}</Title>
          <Nav className="breadcrumb is-small">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li className="is-active">
                <Link to="/page-2">{data.site.siteMetadata.title}</Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <Columns>
          <Column className="is-3">Left Column</Column>
          <Column className="is-9">Right Column</Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

export default AboutUsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
