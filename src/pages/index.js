import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const samplePageLinks = [
 
  { text: "Home", url: "/" },
  { text: "About", url: "about" },
  { text: "Contact", url: "contact" },
  { text: "Post", url: "post" },
   {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
]



const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
     
      <h1>
        Welcome to <b>Home Page!</b>
      </h1>
      <p className={styles.intro}>
  {samplePageLinks.map((link, i) => (
    <React.Fragment key={link.url}>
      {link.text === "Page 2" && (
        <>
          <br />
          <StaticImage
            src="../images/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_8zy4ryxq4fc1yjnomdhw.webp" 
            alt="Above Page 2"
            width={700}
            height={350}
            className={styles.page2Image} 
          />
        </>
      )}
      <Link
        to={link.url}
        className={link.text === "Page 2" ? styles.page2Link : ""}
      >
        {link.text}
      </Link>
      {i !== samplePageLinks.length - 1 && <> · </>}
    </React.Fragment>
  ))}
</p>

    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage