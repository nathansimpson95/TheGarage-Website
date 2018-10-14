import React from 'react'
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
  logo: {
    maxWidth: 270,
    alignSelf: 'flex-start',
  },
  button: {
    background: 'red',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    fontWeight: 700,
  },
}

const Hero = () => (
  <div style={heroStyles.section}>
    <div style={{
          maxWidth: 550
      }}>
      <img src={logo} style={heroStyles.logo} alt="The Garage" />
      <h1 style={{ fontSize: '4em' }}>
        Love Cars?
        <br />
        Join the Club
      </h1>
      <p style={{ fontSize: '0.8em' }}>
        The Garage is for all of Sydney’s Car Enthusiasts, no matter what you’re
        into. Japanese, Australian, Offroad, Racing, everyone is welcome!
      </p>
      <a style={heroStyles.button} href="#earlyaccess">Get Early Access</a>
    </div>
  </div>
)

export default Hero
