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
          ... on WpPage_Pagebuilder_Layouts_HomeHero {
            ...HomeHero
          }
          ... on WpPage_Pagebuilder_Layouts_AboutUs {
            ...AboutUs
          }
          ... on WpPage_Pagebuilder_Layouts_MeetUs {
            ...MeetUs
          }
          ... on WpPage_Pagebuilder_Layouts_TestimonialsSlider {
            ...TestimonialsSlider
          }
          ... on WpPage_Pagebuilder_Layouts_AboutHero {
            ...AboutHero
          }
          ... on WpPage_Pagebuilder_Layouts_ImagesGallery {
            ...ImagesGallery
          }
        }
        pageConfiguration {
          hideFooter
          hideHeader
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
