import React from 'react'
import styled from 'styled-components'

const NSGD = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #fa6d01;
    text-decoration: underline;
  }
`

const Footer = () => (
  <footer
    style={{
      textAlign: 'center',
      padding: '6px',
      fontSize: '0.8em',
      background: '#0D0E10',
    }}
  >
    &copy; Copyright 2019. A project by{' '}
    <NSGD href="http://nathansimpson.design">Nathan Simpson</NSGD>.
  </footer>
)

export default Footer
