import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import logo from "../images/logo.svg"


const Hero = () => (
  <div>
    <img src={logo} alt="Logo" />
    <h1>Love Cars? Join the Club</h1>
    <p style={{textsize:'0.3em'}}>
      The Garage is for all of Sydney’s Car Enthusiasts, no matter what you’re
      into. Japanese, Australian, Offroad, Racing, everyone is welcome!
    </p>
    <a href="#earlyaccess">Get Early Access</a>
  </div>
)

// content = [
//   {
//     heading: 'For All of Sydney’s Car Enthusiasts',
//     content: '',
//     image: '',
//     side: 'left',
//   },{
//     heading: 'Work on cars with others',
//     content: '',
//     image: '',
//     side: 'right',
//   },{
//     heading: 'Showcase your Ride',
//     content: '',
//     image: '',
//     side: 'left',
//   },{
//     heading: 'More than a Social Network',
//     content: '',
//     image: '',
//     side: 'right',
//   },
// ]

// const contentRow = (heading, content, image, side) => (
//   <section>
//     {side == 'right' ? <img src={image} /> : null}
//     <div>
//       <h2>heading</h2>
//       <p>content</p>
//     </div>
//     {side == 'right' ? <img src={image} /> : null}
//   </section>
// )

const IndexPage = () => (
  <Layout>
    <Hero />
    <h1>Hi Nathan</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <form id="earlyaccess">
      <label for="name">Name</label>
      <input type="text" name="name"/>
      <label for="email">Email</label>
      <input type="email" name="email"/>
      <input type="submit" name="submit" label="submit"/>
    </form>
  </Layout>
)

export default IndexPage
