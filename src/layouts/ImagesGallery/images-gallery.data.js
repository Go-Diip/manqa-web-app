import { graphql } from "gatsby"

export const query = graphql`
  fragment ImagesGallery on WpPage_Pagebuilder_Layouts_ImagesGallery {
    fieldGroupName
    images {
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
