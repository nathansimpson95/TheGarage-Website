/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

export default () => (
  <div
    css={{
      background: '#000000',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '4em',
    }}
  >
    <h2>Register for early access</h2>
    <p css={{ maxWidth: 500 }}>
      Enter your email address below for an early invite, and be among the first
      to join The Garage.
    </p>
    <form
      name="earlyaccess"
      method="POST"
      data-netlify="true"
      netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thankyou"
      css={{
        margin: '0 auto',
        maxWidth: 500,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        textAlign: 'left',
      }}
      id="earlyaccess"
    >
      <div css={{ marginBottom: '5px' }}>
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" />
      </div>

      <div css={{ marginBottom: '5px' }}>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" />
      </div>

      <div css={{ marginBottom: '5px' }}>
        <Label htmlFor="city">City</Label>
        <Input type="text" name="city" />
      </div>

      <input type="hidden" name="form-name" value="earlyaccess" />

      <Submit type="submit" name="submit" label="submit" />
    </form>
  </div>
)

const Input = styled.input({
  background: '#1A1B1F',
  border: 'none',
  borderRadius: '6px',
  width: '100%',
  color: 'white',
  padding: '5px 10px',
})

const Label = styled.label({
  fontWeight: '600',
  textAlign: 'left',
  fontSize: '0.8em',
})

const Submit = styled.input({
  background: 'red',
  border: 'none',
  color: 'white',
  padding: '5px 20px',
  textDecoration: 'none',
  fontWeight: '700',
  transition: 'all 0.5s ease-in-out',
  borderRadius: 6,

  '&:hover': {
    background: 'white',
    color: 'red',
  },
})
