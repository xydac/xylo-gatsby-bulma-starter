import { Container, Hero, HeroBody, Title } from 'bloomer'
import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Hero isColor="primary" isSize="large">
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>Vertically Centered Text anywhere</Title>
        </Container>
      </HeroBody>
    </Hero>
  </Layout>
)

export default IndexPage
