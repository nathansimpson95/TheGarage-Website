import React from 'react'
//import { Link } from 'gatsby'

//import Layout from '../components/layout'

import Hero from '../components/hero'
import Form from '../components/form'
import Footer from '../components/footer'

const content = [
  {
    heading: 'For All of Sydney’s Car Enthusiasts',
    content: 'hi',
    black: true,
    image: 'http://www.fourfingerdiscount.com.au/wp-content/uploads/2016/02/moleman-cowabunga.jpg',
    side: 'left',
  },{
    heading: 'Showcase your ride',
    content: 'hi',
    image: 'http://www.fourfingerdiscount.com.au/wp-content/uploads/2016/02/moleman-cowabunga.jpg',
    side: 'right',
  },{
    heading: 'Work on cars with others',
    content: 'hi',
    black: true,
    image: 'http://www.fourfingerdiscount.com.au/wp-content/uploads/2016/02/moleman-cowabunga.jpg',
    side: 'left',
  },{
    heading: 'More than a Social Network',
    content: 'hi',
    image: 'http://www.fourfingerdiscount.com.au/wp-content/uploads/2016/02/moleman-cowabunga.jpg',
    side: 'right',
  },
]

const ContentRow = block => (
  <section
    style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: block.data.black ? '#080808' : 'none'
      }}
  >
    <div style={{
      flex: 1,
      display: 'flex',
      padding:20,
      boxSizing: 'content-box',
      alignItems: 'center'
    }}>
      <div>
        <h2>{block.data.heading}</h2>
        <p>{block.data.content}</p>
      </div>
    </div>

    <div style={{
      flex: 1,
      padding: 0
    }}>
      <img style={{margin: 0, padding: 0}} src={block.data.image}/>
    </div>
  </section>
)

const IndexPage = () => (
  <div>
    <Hero />
    <div>
      {content.map(data => 
        <ContentRow data={data}/>
      )}
    </div>
    <Form />
    <Footer />
  </div>
)

export default IndexPage