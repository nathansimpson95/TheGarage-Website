import React from 'react'
import styled from "styled-components"

const formstyles = {
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
}

const Submit = styled.input`
  background: red;
  border: none;
  color: white;
  padding: 5px 20px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.5s ease-in-out;
  border-radius: 6px;

  &:hover{
    background: white;
    color: red;
  }
`;

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
      <div style={{marginBottom: '5px'}}>
        <label htmlFor="name" style={formstyles.label}>Name</label>
        <input type="text" name="name" style={formstyles.input}/>
      </div>

      <div style={{marginBottom: '5px'}}>
        <label htmlFor="email" style={formstyles.label}>Email</label>
        <input type="email" name="email" style={formstyles.input}/>
      </div>

      <div style={{marginBottom: '5px'}}>
        <label htmlFor="city" style={formstyles.label}>City</label>
        <input type="text" name="city" style={formstyles.input}/>
      </div>

      <input type="hidden" name="form-name" value="earlyaccess" />
      
      <Submit type="submit" name="submit" label="submit"/>
    </form>
  </div>
)

export default Form
