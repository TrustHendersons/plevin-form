import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TermsPage = () => (
  <Layout>
    <Seo title="Terms of Service" />

    <div className="lg:container">

      <div className="grid grid-cols-0 gap-4">
            
            <h1 class="display-1">Free Check Terms of Service</h1>
            <hr />

             <p>We offer this free check to assess whether there was an undisclosed commission associated with the sale of a PPI policy that you took out, before you decide whether you wish to make a claim for any redress you may be entitled to.</p>

            <p>This service is completely free of charge and you are under no obligation to pursue a claim once this free check has been completed. You can also cancel this free check at any time, at no cost, nor are you obliged to subsequently pursue any claim.</p>

            <p>As part of the free check, we will contact the appropriate financial institution who sold you the PPI policy to obtain copies of documentation relating to the policy, in particular whether there was a commission that was not disclosed to you. Once we know which financial institutions you wish us to check, we will send you separate Letters of Authority for each financial institution, which will enable us to contact them on your behalf to carry out the free check. Please note that in some cases you may need to provide some additional documents to allow us to do this (e.g. proof of ID and address).</p>

            <p>Once the free check is complete, we will contact you with the results. You can then decide how you would like to proceed. If you do not wish to then pursue a claim, we will simply close your file in accordance with our Privacy Policy.</p>

            <p>If you wish to pursue a claim against the financial institution who sold you the PPI policy and did not disclose details of any commission paid, you can choose to do this yourself (at no cost). Alternatively, you can choose to use the expertise of one of our partner law firms to assist you with your claim, in which case our partner law firm will send you directly their Terms and Conditions of business (or we will send it on their behalf) to read, sign and return to them. These Terms and Conditions will detail what fees our partner law firm will charge to pursue a claim on your behalf.</p>

            <p>Finally, we reserve the right to choose not to process a free check. If we do not process the check, we will write to you to confirm this and provide you with information as to how you may look to find out yourself if an undisclosed commission was associated with the sale of a PPI policy that was sold to you.</p>   
                
            </div>    

      </div>          

</Layout>
)

export default TermsPage