import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FeatherIcon from "feather-icons-react"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div class="flex h-5/6">
        <div class="m-auto">
          <h1 className="text-green-500">Coming Soon</h1>
        </div>
</div> 


  </Layout>
)

export default IndexPage
