import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>

            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                RightBtnText="Existing inventory" />

            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                RightBtnText="Existing inventory" />

            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                RightBtnText="Existing inventory" />

            <Section
                title="Model x"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                RightBtnText="Existing inventory" />

            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                RightBtnText="Learn more" />

            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Order now" />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`