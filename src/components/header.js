import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo.svg'

export default () => (
  <header style={{ margin: '10px 0' }}>
    <img
      src={logo}
      style={{ width: '40%', maxWidth: 200, margin: 0 }}
      alt="The Garage"
    />
  </header>
)
