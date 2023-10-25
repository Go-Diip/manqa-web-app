import { graphql } from "gatsby"

export const query = graphql`
  fragment MeetUs on WpPage_Pagebuilder_Layouts_MeetUs {
    fieldGroupName
    content
    image {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    link {
      url
      target
    }
  }
`
