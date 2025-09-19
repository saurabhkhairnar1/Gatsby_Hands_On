import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

const ContactPage = () => (
  <main>
    <Navbar />
    
    {}
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>Contact Us</h1>
      <p style={{ textAlign: "center", margin: "auto", marginBottom: "2rem" }}>You can reach us at <br/> 
      <a href="saurabhkhairnarco@gmail.com" target="_blank" rel="noopener noreferrer">
    saurabhkhairnarco@gmail.com
  </a>
      </p>
      <Link to="/">Go Home</Link>
    </div>
  </main>
)

export default ContactPage
