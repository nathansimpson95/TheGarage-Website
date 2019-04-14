/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import Hero from '../components/hero'
import Form from '../components/form'
import Footer from '../components/footer'
import Theme from '../components/theme'

const IndexPage = () => (
  <Theme>
    <Hero />
    <Form />
    <Footer />
  </Theme>
)

export default IndexPage
