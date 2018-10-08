import { Title } from 'bloomer/lib/elements/Title'
import { Hero } from 'bloomer/lib/layout/Hero/Hero'
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody'
import React from 'react'

const NotFoundPage = () => (
  <Hero>
    <HeroBody>
      <Title>Not Found</Title>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </HeroBody>
  </Hero>
)

export default NotFoundPage
