import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpeakingPage from "./speaking"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Coffee People</h1>
    <p>Welcome to your new Gatsby site.</p>
    <SpeakingPage />
  </Layout>
)

export default IndexPage
