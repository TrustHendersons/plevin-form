import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FeatherIcon from "feather-icons-react"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="lg:container">

        <div className="flex grid grid-cols-none md:grid-cols-3 gap-4 h-2/3 text-center">

          <div className="w-5/6 md:w-2/3 pt-6 md:col-span-2 h-full mx-auto">

            <div>
              <h1 className="uppercase text-green-500 mb-1 uppercase">Missed the PPI deadline?</h1>
              <h2 className="uppercase text-green-500">PPI claim rejected?</h2>
              <hr className="my-2"/>
              <p className="text-lg">£billions can be claimed in 'Plevin' cases (also know as PPI2) after a landmark court ruling. <strong>Crucially, the PPI Deadline does NOT apply to these claims!</strong></p>
            </div>

            <div className="section-start rounded-md mx-auto p-1 md:p-4">
              <h2 className="text-center uppercase mb-2">Start your Free Plevin Check today</h2>
              <h3 className="text-center">Did you take out PPI?</h3>

              <div className="md:w-3/6 mx-auto mt-3">
                <Link className="btn-start m-2 pt-3" to="/form/">YES</Link>
                <Link className="btn-start m-2 pt-3" to="/form/">UNSURE</Link>
                <Link className="btn-start m-2 pt-3" to="/no-claim/">NO</Link>
              </div>  
            </div>

            <div className="mx-auto flex flex-col justify-center">

              <div className="flex mx-auto">
              <FeatherIcon icon="star" color="#7BAE7A" fill="#7BAE7A" size="36" className="mb-2 mx-1"/>
              <FeatherIcon icon="star" color="#7BAE7A" fill="#7BAE7A" size="36" className="mb-2 mx-1"/>
              <FeatherIcon icon="star" color="#7BAE7A" fill="#7BAE7A" size="36" className="mb-2 mx-1"/>
              <FeatherIcon icon="star" color="#7BAE7A" fill="#7BAE7A" size="36" className="mb-2 mx-1"/>
              <FeatherIcon icon="star" color="#7BAE7A" fill="#7BAE7A" size="36" className="mb-2 mx-1"/>
              </div>

              <div className="mt-1">
                <h3>CUSTOMER SATISFACTION</h3>
              </div>

            </div> 
          </div>          

          
          <div class="flex items-end">  
            <StaticImage
            src="../images/header_cutout.png"
            transformOptions={"cover"}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{  }}
            />
          </div>     

      </div>
      </div>

      <div className="section-blue">
        <h1 className="col-span-4 text-center">How does the Free Plevin Check work?</h1>
        <div className="w-2/3 mx-auto">
          <hr />
        </div>
    
        <div className="lg:container w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">

          <div>
            <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <p className="text-sm mb-2"><strong>We offer this free check</strong> to assess whether there was an undisclosed commission on a PPI policy that you held, before you decide whether you wish to make a claim.</p>
          </div>

          <div>  
            <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <p className="text-sm mb-2"><strong>This check is completely free of charge</strong> and you are under no obligation to pursue a claim once this free check has been completed.</p>
          </div>  

          <div>  
            <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>          
            <p className="text-sm mb-2"><strong>As part of the free check,</strong> we will contact the financial institution who sold you the PPI policy to obtain information relating to the policy.</p>
          </div>  

          <div>
            <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <p className="text-sm"><strong>Once the free check is complete,</strong> we will contact you with the results. You can then decide what to do next.</p>
          </div>

        </div>
      </div>

      <div className="section-yellow">
        <div className="lg:container w-full text-center">
          <div>
            <h1>What is a Plevin claim?</h1>
            <div className="w-2/3 mx-auto">
              <hr />
            </div>
            <p className="text-sm mb-2">These are claims which are related to Payment Protection Insurance (PPI), specifically the commission paid in relation to sale of the PPI. </p>
          </div>
          <div>  
            <p className="text-sm mb-2">In the landmark case Plevin v Paragon Personal Finance ('Plevin'), the Supreme Court ruled that a large commission that was not disclosed to the purchaser at the time of sale created an unfair relationship under the Consumer Credit Act. As a result the Claimant, Mrs Plevin, was entitled to a refund of the commission that was paid to the seller, plus any applicable interest. In the case of Plevin, the commission was over 71% of the PPI premium amount and the Financial Conduct Authority has subsequently confirmed that the average commission was a staggering 67%, and this was rarely disclosed. The good news is that the PPI deadline does not apply to Plevin claims and therefore potentially billions of pounds can still be reclaimed!</p>
          </div>  
        </div>
      </div> 

  </Layout>
)

export default IndexPage
