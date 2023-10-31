import { graphql } from "gatsby"

export const query = graphql`
  fragment TestimonialsSlider on WpPage_Pagebuilder_Layouts_TestimonialsSlider {
    fieldGroupName
    sliderItems {
      title
      content
    }
    instagram
    instagramImages {
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
