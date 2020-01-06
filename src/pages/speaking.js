import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SpeakingPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Testing Engagements</h1>
        <p>Bla bla</p>
        <p>I will be speaking at the following conferences next year:</p>
        <ul>
            <li>JS Heroes</li>
            <li>self.conference</li>
            <li>Strange Loop</li>
        </ul>
    </Layout>
)
export default SpeakingPage