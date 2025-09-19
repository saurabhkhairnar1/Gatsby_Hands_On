import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const PostPage = () => {
  return (
    <Layout>
      <Seo title="My Post" />
      <h1>My First Post</h1>
      <h2>Getting Started with Gatsby: Build Your First Static Site</h2>
      <h3>Key Takeaways</h3>
      <p style={{ textAlign: 'justify' }}>
        Gatsby is a popular, React-based open-source framework ideal for building fast and secure static sites, leveraging modern web technologies like GraphQL.
Setting up a Gatsby project is straightforward with the Gatsby CLI, which simplifies site creation and configuration.
Static sites built with Gatsby are incredibly fast due to prebuilt markup and content served over CDNs, enhancing user experience with quick load times.
Gatsby supports dynamic site features through its rich plugin ecosystem, allowing integration with various data sources and third-party services.
Styling in Gatsby can be managed globally or through component-scoped styles using CSS Modules, providing flexibility in design and maintainability.
Deploying a Gatsby site can be efficiently done through platforms like Netlify, which offer continuous deployment from repositories for seamless updates.
      </p>
      <StaticImage
      
        src="../images/gatsby-framework.png"
        alt="Post Image"
        placeholder="blurred"
        layout="constrained"
        width={600}
      />
      
       <Link to="/">Back to Home</Link>
    </Layout>
  )
}

export default PostPage