 
import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
        <h1 className="post-title">Contact</h1>
        <p>The Global Dialogue Initiative is a platform for youth around the world to contribute to discussions on political, economic, and social issues.</p>
      </div>
      <div>
        <br/>
        <br/>
        <h3>Name &bull; Executive Director</h3>
        <p>Let me help you kick start your next project &rarr;</p>
        <br/>
        <br/>
        <h3>Name &bull; Marketing/Outreach Director</h3>
        <p>Let me help you kick start your next project &rarr;</p>
        <br/>
        <br/>
        <h3>Name &bull; Creative Director</h3>
        <p>Let me help you kick start your next project &rarr;</p>
        <br/>
        <br/>
        <h3>Name &bull; Technology Director</h3>
        <p>Let me help you kick start your next project &rarr;</p>
        <br/>
        <br/>
        <h3>Name &bull; ETC Director</h3>
        <p>Let me help you kick start your next project &rarr;</p>
        <br/>
        <br/>
        <h3>Name &bull; ETC Director</h3>
        <p>Let me help you kick start your next project &rarr;</p>
        <br/>
        <br/>
        <h3>Name &bull; ETC Director</h3>
        <p>Let me help you kick start your next project &rarr;</p>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
