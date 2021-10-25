import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"
import FeatherIcon from "feather-icons-react"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const feather = require('feather-icons')  

  return (
    <>
  
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        <main className="flex flex-grow flex-col">
            {children}
        </main>

         <div className="subfooter">
          <div className="container">    
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 text-center">
              <div>
                <FeatherIcon icon="award" size="36" className="mb-2 mx-auto"/>
                <h4 className="mb-2">Easy Process</h4>
                <p>Start the simple <br/> online form today</p>
              </div>
              <div>
                <FeatherIcon icon="award" size="36" className="mb-2 mx-auto"/>                
                <h4 className="mb-2">Expert Assistance</h4>
                <p>For over 10 years we have been <br /> reclaiming money for consumers like you</p>
              </div>
              <div>
                <FeatherIcon icon="award" size="36" className="mb-2 mx-auto"/>                
                <h4 className="mb-2 mt-2">Free Service</h4>
                <p>No cost to you <br/> and no obligation</p>
              </div>
            </div>
            <hr className="mt-4"/>
            <p className="text-sm text-center">You can pursue a claim yourself without using a Claims Management Company and without cost.  You will first need to complain directly to the appropriate third party who sold you the product and if this is unsuccessful, you can complain through the Financial Ombudsman Service or, if the third party is no longer trading, the Financial Services Compensation Scheme.</p>
           </div> 
        </div>


       <footer>
          <div className="lg:container">      
            <div className="flex justify-between">  
                <div>    
                  <p className="m-2">© {new Date().getFullYear()} Built by
                  {` `}
                  <a href="https://2owls.co.uk" target="_blank" rel="noopener noreferrer">Owls</a>
                  </p>
                </div>
                <div className="grid grid-cols-0 md:grid-cols-3 text-center">
                  <Link className="m-2" to="/privacy/">Privacy Policy</Link>
                  <Link className="m-2" to="/terms-of-service/">Free Check Terms of Service</Link>
                  <Link className="m-2" to="/complaints/">Complaints</Link>
                </div>
            </div>

            <hr className="my-4"/>
            <p className="text-xs text-center">Hendersons is a trading style of Henderson Claims Limited. Henderson Claims Limited is authorised and regulated by the Financial Conduct Authority with reference number FRN:836041. Henderson Claims Limited is a Claims Management Company (CMC). Registered with the Information Commissioners Office: registration number ZA147049. Registered address: Unit 2, Ashbrook Office Park, Manchester, M22 5LB. Registered in England and Wales, Company number 7646017. VAT number: 240 8769 88.</p>
          </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
