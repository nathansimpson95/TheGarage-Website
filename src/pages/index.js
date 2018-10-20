import React from 'react'
import styled from "styled-components"
//import { Link } from 'gatsby'

import Layout from '../components/layout'

import Hero from '../components/hero'
import Form from '../components/form'
import Footer from '../components/footer'


import iphoneDemo from '../images/iphone-demo.png'

const content = [
  {
    heading: 'For All of Sydney’s Car Enthusiasts',
    content: 'The Garage is the digital extension of Sydney’s car culture. Japanese, Offroad, Racing, whatever your passion, you will find people, projects and events that will interest you. The Garage was designed in Sydney, for Sydney.',
    black: true,
    image: iphoneDemo,
    left: true,
  },{
    heading: 'Showcase your ride',
    content: 'Create a profile for each of your cars, and share your build progress, photos, and questions with your audience. People can follow you to see more and engage with your content.',
    image: iphoneDemo,
  },{
    heading: 'Work on cars with others',
    content: 'Workshops allow you work on cars with others. Want to learn new skills from experienced users? Have ambitious plans for your car and need a few extra hands? Workshops will let you get more done while making new friends along the way.',
    black: true,
    image: iphoneDemo,
    left: true,
  },{
    heading: 'More than a Social Network',
    content: 'hi',
    image: iphoneDemo,
  },
]


const Row = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => props.data.left ? 'row' : 'row-reverse'};
`;
  
  
const RowText = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
`;

const ContentRow = block => (
  <section
    style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: block.data.black ? '#080808' : 'none',
      }}
  >
    <Row data={block.data}>
      {console.log(block.data)}
      <RowText>
        <div>
          <h2>{block.data.heading}</h2>
          <p>{block.data.content}</p>
        </div>
      </RowText>

      <div style={{
        flex: 1,
        padding: 0,
        margin: 0,
        textAlign: 'center'
      }}>
        <img style={{margin: '20px 0 0 0', padding: 0}} src={block.data.image}/>
      </div>
    </Row>
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