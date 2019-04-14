/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import Theme from '../components/theme'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'

//graphQL config
import { ApolloProvider, Query } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

import { format } from 'date-fns'

const client = new ApolloClient({
  uri: 'https://thegarage-api.herokuapp.com/admin/api',
})

export default () => (
  <ApolloProvider client={client}>
    <Container>
      <>
        <Theme>
          <Header />

          <h1 css={{ fontSize: '1.4em', marginTop: 70 }}>Upcoming Events</h1>
          <Query
            query={gql`
              {
                allEvents {
                  id
                  title
                  location
                  body
                  url
                  date
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error :(</p>

              console.log(data)

              return data.allEvents.map(event => (
                <EventCard event={event} key={event.id} />
              ))
            }}
          </Query>
        </Theme>
      </>
    </Container>
    <Footer />
  </ApolloProvider>
)

const EventCard = ({ event }) => (
  <a
    href={event.url}
    css={{
      marginBottom: '1em',
      color: 'white',
      display: 'block',
      textDecoration: 'none',
      padding: 12,
      background: '#262831',
      borderRadius: 6,
      boxShadow: '0 16px 16px rgba(0,0,0,0.3)',
    }}
  >
    <h2 css={{ fontSize: '1em', marginBottom: 6, color: 'white' }}>
      {event.title}
    </h2>
    <p
      css={{
        margin: 0,
        fontSize: '0.8em',
        color: '#cbcbcb',
      }}
    >
      {event.location}
      <br />
      {format(event.date, 'Do MMM HH:MM A')}
    </p>
  </a>
)
