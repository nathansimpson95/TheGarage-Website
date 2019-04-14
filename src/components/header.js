/** @jsx jsx */
import { jsx } from '@emotion/core'

import logo from '../images/logo.svg'

export default () => (
  <header css={{ margin: '10px 0' }}>
    <img
      src={logo}
      css={{ width: '40%', maxWidth: 200, margin: 0 }}
      alt="The Garage"
    />
  </header>
)
