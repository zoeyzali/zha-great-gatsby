import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from '../components/Home/Info'
import BackgroundSection from "../components/Globals/BackgroundSection"


const AboutPage = ( { data } ) => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`,
            `application`, `react`]} />
        <BackgroundSection img={data.img.childImageSharp.fluid} title="about us" styleClass="about-bg" />
        <Info />
    </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default AboutPage