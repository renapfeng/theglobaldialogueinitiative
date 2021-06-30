 
import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"About page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
        <h1 className="post-title">About</h1>
        <p>The Global Dialogue Initiative is a nonpartisan platform where teens can contribute to discussions about political, economic, and social issues from around the world.</p>
      </div>
      <div>
        <h3>Name &bull; Executive Director</h3>
        <p>Let me help you kick start your next project &rarr;</p>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
