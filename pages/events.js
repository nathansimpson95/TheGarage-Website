/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Theme from "../components/theme";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/container";

//graphQL config
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { format } from "date-fns";

export default () => (
  <>
    <Container>
      <>
        <Theme>
          <Header />
          <h1 css={{ fontSize: "1.4em", marginTop: 70 }}>Upcoming Events</h1>
          <EventsList />
        </Theme>
      </>
    </Container>
    <Footer />
  </>
);

const EventsList = () => (
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
    {({ data }) => {
      return data.allEvents.map(event => (
        <EventCard event={event} key={event.id} />
      ));
    }}
  </Query>
);

const EventCard = ({ event }) => (
  <a
    href={event.url}
    css={{
      marginBottom: "1em",
      color: "white",
      display: "block",
      textDecoration: "none",
      padding: 12,
      background: "#262831",
      borderRadius: 6,
      boxShadow: "0 16px 16px rgba(0,0,0,0.3)"
    }}
  >
    <h2 css={{ fontSize: "1em", marginBottom: 6, color: "white" }}>
      {event.title}
    </h2>
    <p
      css={{
        margin: 0,
        fontSize: "0.8em",
        color: "#cbcbcb"
      }}
    >
      {event.location}
      <br />
      {format(event.date, "Do MMM HH:MM A")}
    </p>
  </a>
);
