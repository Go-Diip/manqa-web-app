import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import SEO from "../../components/seo/seo.component"

export const query = graphql`
  query PostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      date
      content
      featuredImage {
        node {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
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
        opengraphImage {
          altText
          sourceUrl
          title
        }
        opengraphModifiedTime
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
      id
      uri
    }
  }
`

export const Head = ({ data }) => {
  const seo = data.wpPost.seo
  const canonical = `/blog${seo.canonical}`
  const opengraphUrl = `/blog${seo.opengraphUrl}`
  return <SEO data={{ ...seo, canonical, opengraphUrl }} />
}

const Post = ({ data }) => {
  const { title, content, featuredImage, date } = data.wpPost
  return (
    <Layout>
      {title}
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {/*<Img fluid={featuredImage.imageFile.childImageSharp.fluid} />*/}
    </Layout>
  )
}

export default Post
