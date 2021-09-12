 
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
        <p>Feel free to email us at <a href = "mailto: rena@theglobaldialogueinitiative.org">rena@theglobaldialogueinitiative.org</a> with any questions. We are open to partnerships and would love to hear from you!</p>
      </div>
      <div>
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
