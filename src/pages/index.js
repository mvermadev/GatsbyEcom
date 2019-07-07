import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/reuseComp/Main";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main></Main>
  </Layout>
)

export default IndexPage
