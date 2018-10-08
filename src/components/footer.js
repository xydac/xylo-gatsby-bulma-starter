import React from 'react'
import { Hero } from 'bloomer/lib/layout/Hero/Hero'
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody'
import { Container } from 'bloomer/lib/layout/Container'

const Footer = ({ footerText }) => (
  <footer id="footer">
    <Hero isColor="black" isSize="small">
      <HeroBody>
        <Container>{footerText}</Container>
      </HeroBody>
    </Hero>
  </footer>
)

export default Footer
