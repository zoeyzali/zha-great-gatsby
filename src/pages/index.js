import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Globals/Navbar"
import { FaGulp } from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <h1>Coffee People</h1>
    <FaGulp />
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage
