import React from 'react'
import styled from "styled-components"
//import { Link } from 'gatsby'

import Layout from '../components/layout'

import Hero from '../components/hero'
import Form from '../components/form'
import Footer from '../components/footer'


import imageDashboard from '../images/explore-crop.png'
import imageProjects from '../images/projects-crop.png'
import imageWorkshop from '../images/workshop-crop.png'
import imageEvents from '../images/event-crop.png'
import eventCanopy from '../images/eventCanopy.png'

const content = [
  {
    heading: 'For All of Sydney’s Car Enthusiasts',
    content: 'The Garage is the digital extension of Sydney’s car culture. Japanese, Offroad, Racing, whatever your passion, you will find people, projects and events that will interest you. The Garage was designed in Sydney, for Sydney.',
    image: imageDashboard,
    left: true,
  },{
    heading: 'Showcase your ride',
    content: 'Create a profile for each of your cars, and share your build progress, photos, and questions with your audience. People can follow you to see more and engage with your content.',
    black: true,
    image: imageProjects,
  },{
    heading: 'Work on cars with others',
    content: 'Workshops allow you work on cars with others. Want to learn new skills from experienced users? Have ambitious plans for your car and need a few extra hands? Workshops will let you get more done while making new friends along the way.',
    image: imageWorkshop,
    left: true,
  },{
    heading: 'The hottest events',
    content: 'Be the first to know about all the must-see events for car lovers in Sydney.',
    black: true,
    image: imageEvents,
  },
]


const FeatureRow = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => props.data.left ? 'row' : 'row-reverse'};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
  
  
const RowText = styled.div`
  flex: 1;
  display: flex;
  padding: 40px;
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
    <FeatureRow data={block.data}>
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
    </FeatureRow>
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