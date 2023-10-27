import { graphql } from "gatsby"

export const query = graphql`
  fragment AboutHero on WpPage_Pagebuilder_Layouts_AboutHero {
    fieldGroupName
    firstContent
    image {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    title
    secondContent
  }
`
