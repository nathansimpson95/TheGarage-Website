/** @jsx jsx */
import { jsx } from '@emotion/core'

export default ({ children }) => (
  <div
    css={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '0px 1em 1.5em',
      paddingTop: 0,
    }}
  >
    {children}
  </div>
)
