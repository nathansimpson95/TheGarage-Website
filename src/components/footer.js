/** @jsx jsx */
import { jsx } from '@emotion/core'

const Footer = () => (
  <footer
    css={{
      textAlign: 'center',
      padding: '6px',
      fontSize: '0.8em',
      background: '#0D0E10',
    }}
  >
    &copy; Copyright 2019. A project by{' '}
    <a
      css={{
        color: '#fff',
        textDecoration: 'none',

        '&:hover': {
          color: '#fa6d01',
          textDecoration: 'underline',
        },
      }}
      href="http://nathansimpson.design"
    >
      Nathan Simpson
    </a>
    .
  </footer>
)

export default Footer
