import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'

import './fonts.css'

const Theme = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Global
          styles={{
            body: {
              fontFamily: "'montserrat', sans-serif",
              margin: 0,
              background: '#1a1b1f',
              color: 'white',
            },
            a: {
              color: 'red',
            },
            p: {
              lineHeight: '1.6em',
            },
            'h1, h2, h3, h4, h5, h6': {
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: '1.45rem',
            },
          }}
        />
        {children}
      </>
    )}
  />
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
