import React from 'react'
import logo from "../images/logo.svg"

const heroStyles = {
      section: {
            background: '#222',
            padding: '4em',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
      },
      logo: {
            maxWidth: 270
      },
      button: {
            background: 'red',
            border: 'none',
            color: 'white',
            padding: '5px 20px',
            textDecoration: 'none',
            fontWeight: 700
      }
}


const Hero = () => (
      <div style={heroStyles.section}>
        <img src={logo} style={heroStyles.logo} alt="The Garage" />
        <h1 style={{fontSize: '4em'}}>Love Cars?<br/>Join the Club</h1>
        <p style={{fontSize:'0.8em'}}>
          The Garage is for all of Sydney’s Car Enthusiasts, no matter what you’re into.<br/>Japanese, Australian, Offroad, Racing, everyone is welcome!
        </p>
        <a style={heroStyles.button} href="#earlyaccess">Get Early Access</a>
      </div>
    )


export default Hero
