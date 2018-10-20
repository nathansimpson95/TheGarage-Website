import React from 'react'

const formstyles = {
  button: {
    background: 'red',
    border: 'none',
    color: 'white',
    padding: '5px 20px',
    fontWeight: 700
  },
  input: {
    background: "#1A1B1F",
    border: 'none',
    borderRadius: '6px',
    width: '100%',
    color: 'white',
    padding: '5px 10px'
  },
  label: {
    fontWeight: '600',
    textAlign: 'left',
    fontSize: '0.8em',
  },
  group: {
    marginBottom: '5px',
  }
}

const Form = () => (
  <div
    style={{
      background: '#000000',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '4em'
    }}
  >
      <h2>Register for early access</h2>
      <p style={{maxWidth: 500}}>Enter your email address below for an early invite, and be among the first to join The Garage.</p>
    <form
      name="earlyaccess"
      method="POST"
      data-netlify="true"
      netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thankyou"
      style={{
        margin: '0 auto',
        maxWidth: 500,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        textAlign: 'left'
      }}
      id="earlyaccess"
    >
      <div style={formstyles.group}>
        <label htmlFor="name" style={formstyles.label}>Name</label>
        <input type="text" name="name" style={formstyles.input}/>
      </div>

      <div style={formstyles.group}>
        <label htmlFor="email" style={formstyles.label}>Email</label>
        <input type="email" name="email" style={formstyles.input}/>
      </div>

      <div style={formstyles.group}>
        <label htmlFor="city" style={formstyles.label}>City</label>
        <input type="city" name="email" style={formstyles.input}/>
      </div>

      <input type="hidden" name="form-name" value="earlyaccess" />
      
      <input type="submit" name="submit" label="submit" style={formstyles.button}/>
    </form>
  </div>
)

export default Form
