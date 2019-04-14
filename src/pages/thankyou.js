/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from '@emotion/core'

export default () => (
  <div
    css={{
      maxWidth: 500,
      margin: '150px auto',
      textAlign: 'center',
    }}
  >
    <h1>Thank you</h1>
    <p>
      You will be among the first to enter The Garage! Stay tuned for more info
      in your inbox in the coming weeks, and{' '}
      <a href="https://www.facebook.com/thegrgeapp">like us on Facebook!</a>
    </p>
    <Link to="/">Go home</Link>
  </div>
)
