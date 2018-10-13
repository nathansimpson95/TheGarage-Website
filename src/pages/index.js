import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Hero from '../components/hero'
import Form from '../components/form'
import Footer from '../components/footer'

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
  <div>
    <Hero />
    <Layout>
      <h1>Hi Nathan</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    <Form />
    <Footer />
  </div>
)

export default IndexPage
