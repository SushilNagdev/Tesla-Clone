import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model x"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Lowest Cost Salary Panels in America"
          description="Money-Back Guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"

        />
        <Section
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"

        />
        <Section
          title="Accessories"
          description=""
          backgroundImg="Accessories.jpg"
          leftBtnText="shop now"
          

        />

        
    </Container>
  )
}

export default Home
const Container = styled.div`
    height: 100vh
`