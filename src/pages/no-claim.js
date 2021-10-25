import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


const NoClaimPage = () => {

  return (

  <Layout>

      <div className="container">
        <div className="grid md:grid-cols-2">
          <div>
              <section className="section">
              <h2>Sorry, you will not have a Plevin claim unless you were sold PPI when you took out a loan, mortgage or credit card.</h2>
              <p>In order to have a Plevin claim you must have had PPI. If you have had PPI and wish to proceed click below.</p>
              <Link className="btn-start m-2 text-center" to="/form/">Start Your FREE Plevin Check Now</Link>
              </section>  
          </div>

          <div className="">  
            <StaticImage
            src="../images/header_cutout.png"
            transformOptions={"cover"}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            />
          </div>             

    </div>
    </div>
  </Layout>
)

  }

export default NoClaimPage