import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css" 

const SecondPage = () => (
  <Layout>
    <h1>This is the Second Page</h1>

    
    <StaticImage
      src="../images/gatsby-framework.png" 
      alt="Gatsby Logo"
      width={400}
      placeholder="blurred"
      className={styles.pageImage} 
    />

   
    <p style={{ marginTop: "1rem" }}>
      Welcome to page 2. This is a custom content section where you can add any
      text or components you like. Enjoy building with Gatsby!
    </p>

    <Link to="/">← Back to Home</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
