import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { getPageLayout } from "../../utils/get-layout-utils"
import SEO from "../../components/seo/seo.component"

export const query = graphql`
  query PageQuery($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      isFrontPage
      title
      content
      uri
      slug
      parentId
      seo {
        canonical
        title
        focuskw
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphImage {
          altText
          sourceUrl
          title
        }
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          title
        }
      }
      pageBuilder {
        layouts {
          ... on WpPage_Pagebuilder_Layouts_MiscContent {
            ...MiscContent
          }
        }
        pageConfiguration {
          hideFooter
          hideHeaderItems
        }
      }
    }
  }
`

export const Head = ({ data }) => <SEO data={data?.wpPage?.seo} />

const PageTemplate = ({ data }) => {
  const { slug, pageBuilder, title } = data.wpPage
  const layouts = pageBuilder.layouts || []
  return (
    <Layout {...pageBuilder.pageConfiguration}>
      {layouts.map(layout => getPageLayout(layout))}
    </Layout>
  )
}

export default PageTemplate
