import React from "react"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"
import { Helmet } from "react-helmet"

const Layouts = () => {
  return (
    <Layout>
      <Helmet>
        <title>Layouts - ONLY FOR DEV</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <LayoutTitle>MiscContent</LayoutTitle>
      <MiscContent content={`<p>Some content Here</p>`} />
    </Layout>
  )
}

export default Layouts
