/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

import logo from '../images/logo.svg'
import herobg from '../images/herobg.jpg'
const heroStyles = {
  section: {
    background: '#222',
    backgroundImage: `url(${herobg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}

const EarlyAccess = styled.a`
  background: red;
  border: none;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: white;
    color: red;
  }
`

const Hero = () => (
  <div css={heroStyles.section}>
    <div
      css={{
        maxWidth: 550,
      }}
    >
      <img
        src={logo}
        css={{ maxWidth: 270, alignSelf: 'flex-start' }}
        alt="The Garage"
      />
      <h1 css={{ fontSize: '4em' }}>
        Love Cars?
        <br />
        Join the Club
      </h1>
      <p css={{ fontSize: '1em' }}>
        The Garage is for all of Sydney’s Car Enthusiasts, no matter what you’re
        into. Japanese, Australian, Offroad, Racing, everyone is welcome!
      </p>
      <EarlyAccess href="#earlyaccess">Get Early Access</EarlyAccess>
    </div>
  </div>
)

export default Hero
